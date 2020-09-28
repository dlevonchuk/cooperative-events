import { createClient, RedisClient } from 'redis';
import { promisify } from 'util';

const client: RedisClient = createClient({ password: process.env.REDIS_PASSWORD });
const getAsync = promisify(client.get).bind(client);

type RedisGetType<T> = T | string | null;
type RedisSetType = object | string;

function connect(): Promise<RedisClient> {
  return new Promise((resolve) => {
    if (client.connected) {
      resolve(client);
    }
    client.on('ready', () => resolve(client));
  });
}

async function get<T>(key: string): Promise<RedisGetType<T>> {
  const value: string | null = await getAsync(key);
  if (value === null) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

async function set(key: string, value: RedisSetType, expiration: number): Promise<null> {
  return new Promise((resolve, reject) => {
    try {
      const parseValue = JSON.stringify(value);
      client.set(key, parseValue, 'EX', expiration, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });
}

async function keyExist(key: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    client.exists(key, (err, response) => {
      if (err) {
        reject(err);
      }
      resolve(Boolean(response));
    });
  });
}

export default {
  connect, get, set, keyExist,
};

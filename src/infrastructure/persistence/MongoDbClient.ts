import { Db, MongoClient } from 'mongodb';

export default class MongoDbClient {
  private static readonly url: string = 'mongodb://localhost:27017/';

  static db?: Db;

  static async connect(): Promise<Db> {
    if (undefined !== this.db) {
      return this.db;
    }
    const client = new MongoClient(this.url);
    await client.connect();
    this.db = client.db('ce');

    return this.db;
  }
}

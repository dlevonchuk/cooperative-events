import IEventRepository from '../../../application/repository/IEventRepository';
import Event from '../../../domain/model/Event';
import MongoDbClient from '../MongoDbClient';

export default class MongoEventRepository implements IEventRepository {
  constructor(private dbClient: MongoDbClient) {}

  async getEvent(id: number): Promise<Event> {
    const event: Event | null = await MongoDbClient.db!.collection('event').findOne({ _id: id });
    if (event === null) {
      throw new Error('Event not exist');
    }

    return event;
  }

  async save(event: Event): Promise<void> {
    await MongoDbClient.db!.collection('event').insertOne(event);
  }

  async getNextId(): Promise<number> {
    const collection = await MongoDbClient.db!.collection('event')
      .find()
      .sort({ _id: -1 })
      .limit(1)
      .toArray();

    if (collection.length === 0) {
      return 1;
    }

    // eslint-disable-next-line no-underscore-dangle
    return collection[0]._id;
  }
}

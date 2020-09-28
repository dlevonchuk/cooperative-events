import Event from '../../../domain/model/Event';
import { EventDto as OutputEventDto } from '../../dto/Output';
import IEventRepository from '../../repository/IEventRepository';
import EventMapper from '../../mapper/EventMapper';
import redisClient from '../../../infrastructure/persistence/RedisClient';

export default class GetEvent {
  constructor(private repository: IEventRepository, private eventMapper: EventMapper) {}

  async getEvent(id: number): Promise<OutputEventDto> {
    let event: Event;
    if (redisClient.keyExist(String(id))) {
      event = await redisClient.get<Event>(String(id)) as Event;
    } else {
      event = await this.repository.getEvent(id);
      redisClient.set(String(id), event, 3600);
    }

    return this.eventMapper.mappToOutputDto(event);
  }
}

import Event from '../../../domain/model/Event';
import { EventDto as OutputEventDto } from '../../dto/Output';
import IEventRepository from '../../repository/IEventRepository';
import EventMapper from '../../mapper/EventMapper';

export default class GetEvent {
  constructor(private repository: IEventRepository, private eventMapper: EventMapper) {}

  getEvent(id: number): OutputEventDto {
    const event: Event = this.repository.getEvent(id);

    return this.eventMapper.mappToOutputDto(event);
  }
}

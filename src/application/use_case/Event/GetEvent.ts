import Event from '../../../domain/model/Event';
import { EventDto as OutputEventDto } from '../../dto/Output';
import IEventRepository from '../../repository/IEventRepository';
import EventMapper from '../../mapper/EventMapper';

export default class GetEvent {
  constructor(private repository: IEventRepository, private eventMapper: EventMapper) {}

  async getEvent(id: number): Promise<OutputEventDto> {
    const event: Event = await this.repository.getEvent(id);

    return this.eventMapper.mappToOutputDto(event);
  }
}

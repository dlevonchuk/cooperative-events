import IEventRepository from '../../repository/IEventRepository';
import { CreateEventDto as InputEventDto } from '../../dto/Input';
import Event from '../../../domain/model/Event';
import EventMapper from '../../mapper/EventMapper';

export default class CreateEventUseCase {
  constructor(private repository: IEventRepository, private eventMapper: EventMapper) {}

  async createEvent(eventDto: InputEventDto) {
    const nextId = await this.repository.getNextId();
    const event: Event = this.eventMapper.mappToEntity(eventDto, nextId);

    this.repository.save(event);
  }
}

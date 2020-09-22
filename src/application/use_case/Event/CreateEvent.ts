import IEventRepository from '../../repository/IEventRepository';
import InputEventDto from '../../dto/input/IEventDto';
import Event from '../../../domain/model/Event';
import EventMapper from '../../mapper/EventMapper';

export default class CreateEventUseCase {
  constructor(private repository: IEventRepository, private eventMapper: EventMapper) {}

  createEvent(eventDto: InputEventDto) {
    const nextId = this.repository.getNextId();
    const event: Event = this.eventMapper.mappToEntity(eventDto, nextId);

    this.repository.save(event);
  }
}
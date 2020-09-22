import { CreateEventDto, UpdateEventDto } from '../dto/Input';
import { EventDto as OutputEventDto } from '../dto/Output';
import Event from '../../domain/model/Event';

export default class EventMapper {
  mappToEntity(inputEventDto: UpdateEventDto): Event;
  mappToEntity(inputEventDto: CreateEventDto, id: number): Event
  mappToEntity(inputEventDto: CreateEventDto | UpdateEventDto, id?: number): Event {
    const eventId = id ?? (inputEventDto as UpdateEventDto).id;
    if (undefined === eventId) {
      throw new Error('Event id is empty');
    }
    const event = new Event(eventId, inputEventDto.name);

    return event;
  }

  mappToOutputDto(event: Event): OutputEventDto {
    return {
      id: event.getId(),
      name: event.getName(),
      description: event.getDescription() ?? '',
    };
  }
}

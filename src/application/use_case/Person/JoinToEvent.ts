import { JoinToEventDto } from '../../dto/Input';
import IEventRepository from '../../repository/IEventRepository';
import IPersonRepository from '../../repository/IPersonRepository';
import Event from '../../../domain/model/Event';
import Person from '../../../domain/model/Person';

export default class JoinToEvent {
  constructor(
    private eventRepository: IEventRepository,
    private personRepository: IPersonRepository,
  ) {}

  async jointToEvent(joinToEventDto: JoinToEventDto): Promise<void> {
    const event: Event = await this.eventRepository.getEvent(joinToEventDto.eventId);
    const person: Person = await this.personRepository.getPerson(joinToEventDto.personId);

    person.joinToEvent(event);

    this.personRepository.save(person);
  }
}

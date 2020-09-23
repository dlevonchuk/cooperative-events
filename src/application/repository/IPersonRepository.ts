import Person from '../../domain/model/Person';
import ISequence from './ISequence';

export default interface IPersonRepository extends ISequence {
  getPerson(id: number): Promise<Person>;

  getPersonsByEvent(eventId: number): Promise<Person[]>

  save(person: Person): Promise<void>
}

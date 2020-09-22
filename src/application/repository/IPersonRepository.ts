import Person from '../../domain/model/Person';
import ISequence from './ISequence';

export default interface IPersonRepository extends ISequence {
  getPerson(id: number): Person;

  getPersonsByEvent(eventId: number): Person[]

  save(person: Person): void
}

import Person from '../../../domain/model/Person';
import IPersonRepository from '../../repository/IPersonRepository';

export default class GetEventPersons {
  constructor(private repository: IPersonRepository) {}

  getEventPersons(eventId: number): Person[] {
    return this.repository.getPersonsByEvent(eventId);
  }
}

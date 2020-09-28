import Person from '../../../domain/model/Person';
import IPersonRepository from '../../repository/IPersonRepository';

export default class GetEventPersons {
  constructor(private repository: IPersonRepository) {}

  async getEventPersons(eventId: number): Promise<Person[]> {
    const persons = await this.repository.getPersonsByEvent(eventId);

    return persons;
  }
}

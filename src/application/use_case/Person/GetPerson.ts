import Person from '../../../domain/model/Person';
import PersonMapper from '../../mapper/PersonMapper';
import IPersonRepository from '../../repository/IPersonRepository';
import { PersonDto as OutputPersonDto } from '../../dto/Output';

export default class GetPerson {
  constructor(private repository: IPersonRepository, private mapper: PersonMapper) {}

  async getPerson(id: number): Promise<OutputPersonDto> {
    const person: Person = await this.repository.getPerson(id);

    return this.mapper.mappToOutputDto(person);
  }
}

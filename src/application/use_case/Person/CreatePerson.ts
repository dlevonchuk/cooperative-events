import { CreatePersonDto as InputPersonDto } from '../../dto/Input';
import IPersonRepository from '../../repository/IPersonRepository';
import Person from '../../../domain/model/Person';
import PersonMapper from '../../mapper/PersonMapper';

export default class CreatePersonUseCase {
  constructor(private repository: IPersonRepository, private personMapper: PersonMapper) {}

  async createPerson(personDto: InputPersonDto): Promise<void> {
    const nextId = await this.repository.getNextId();
    const person: Person = this.personMapper.mappToEntity(personDto, nextId);

    this.repository.save(person);
  }
}

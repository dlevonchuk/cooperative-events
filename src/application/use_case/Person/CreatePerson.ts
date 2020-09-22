import InputPersonDto from '../../dto/input/IPersonDto';
import IPersonRepository from '../../repository/IPersonRepository';
import Person from '../../../domain/model/Person';
import PersonMapper from '../../mapper/PersonMapper';

export default class CreatePersonUseCase {
  constructor(private repository: IPersonRepository, private personMapper: PersonMapper) {}

  createPerson(personDto: InputPersonDto): void {
    const nextId = this.repository.getNextId();
    const person: Person = this.personMapper.mappToEntity(personDto, nextId);

    this.repository.save(person);
  }
}

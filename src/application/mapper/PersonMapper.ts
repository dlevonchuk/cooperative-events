import { CreatePersonDto, UpdatePersonDto } from '../dto/Input';
import Person from '../../domain/model/Person';

export default class PersonMapper {
  mappToEntity(inputPersonDto: UpdatePersonDto): Person;
  mappToEntity(inputPersonDto: CreatePersonDto, id: number): Person
  mappToEntity(inputPersonDto: CreatePersonDto | UpdatePersonDto, id?: number): Person {
    const personId = id ?? (inputPersonDto as UpdatePersonDto).id;
    if (undefined === personId) {
      throw new Error('Person id is empty');
    }
    const person = new Person(personId, inputPersonDto.name);

    return person;
  }
}

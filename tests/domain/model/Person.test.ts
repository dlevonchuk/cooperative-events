import Event from '../../../src/domain/model/Event';
import Person from '../../../src/domain/model/Person';

describe('Person events functional', () => {
  let event1: Event;
  let event2: Event;
  let person: Person;

  beforeEach(() => {
    event1 = new Event(1, 'test');
    event2 = new Event(2, 'test');
    person = new Person(1, 'John');
  });

  test('Should add event', () => {
    person.joinToEvent(event1);

    expect(person.getEvents()).toContain(event1);
  });

  test('Should remove event', () => {
    person.joinToEvent(event1);
    person.joinToEvent(event2);

    person.leaveEvent(event1);

    expect(person.getEvents()).not.toContain(event1);
  });
});

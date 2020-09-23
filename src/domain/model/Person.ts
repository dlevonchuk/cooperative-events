import Event from './Event';

export default class Person {
  private events: Set<Event>;

  constructor(private readonly id: number, private name: string) {
    this.events = new Set();
  }

  joinToEvent(event: Event): this {
    this.events.add(event);

    return this;
  }

  leaveEvent(event: Event): this{
    this.events.delete(event);

    return this;
  }

  getEvents(): Set<Event> {
    return this.events;
  }

  getName(): string {
    return this.name;
  }

  setName(name:string): this {
    this.name = name;

    return this;
  }

  getId(): number {
    return this.id;
  }
}

import Event from './Event';

export default class Person {
  private events: Set<Event>;

  constructor(private readonly id: number, private name: string) {
    this.events = new Set();
  }

  joinToEvent(event: Event): void {
    this.events.add(event);
  }

  leaveEvent(event: Event): void{
    this.events.delete(event);
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

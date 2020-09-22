export default class Event {
  public constructor(private readonly id: number, private name: string, private description: string = '') {}

  public getName(): string {
    return this.name;
  }

  public setName(name: string): this {
    this.name = name;

    return this;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): this {
    this.description = description;

    return this;
  }

  public getId(): number {
    return this.id;
  }
}

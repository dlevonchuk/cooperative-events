export default interface ISequence{
  getNextId(): Promise<number>;
}

import Event from '../../domain/model/Event';
import ISequence from './ISequence';

export default interface EventReposytoryInterface extends ISequence {
  getEvent(id: number): Event;

  save(event: Event): void
}

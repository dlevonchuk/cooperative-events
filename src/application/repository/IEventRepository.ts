import Event from '../../domain/model/Event';
import ISequence from './ISequence';

export default interface EventReposytoryInterface extends ISequence {
  getEvent(id: number): Promise<Event>;

  save(event: Event): Promise<void>
}

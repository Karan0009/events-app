import Database from '../core/db';
import BaseRepository from '../core/db/base/base.repository';
import Event from '../core/db/models/event.model';

export default class EventRepository extends BaseRepository<Event> {
  constructor() {
    super(Database.getInstance().getConnection(), Event);
  }
}

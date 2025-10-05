import nesoi from '$';
import { Version } from '../../../../../lib/types';

export default nesoi.bucket('events::schedule')
  .model($ => ({
    __nrge: $.literal<`content:${Version}:events:schedule`>(/content:\d+:events:schedule/),
    id: $.string, // ULID
    event_id: $.string,
    location_id: $.string,
    start_datetime: $.datetime,
    end_datetime: $.datetime,
    description: $.string.optional
  }))
  .graph($ => ({
    location: $.one('info::location', {
      id: {'.':'location_id'}
    })
  }));
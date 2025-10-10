/* eslint-disable @typescript-eslint/no-explicit-any */
 
 
 
import nesoi from '$';

export default nesoi.job('plugin_events::backup')
  .message('', () => ({}))
  .input('@')
  .method(async $ => {

    type Plugin = string
    type Type = string
    type Id = string
    
    const items: {
      [x: `${'data'|'content'}:${Plugin}:${Type}:${Id}`]: Record<string, any>
    } = {};

    const schedules = await $.trx.bucket('schedule').query({
      '#sort': ['id@asc']
    }).all();
    const events = await $.trx.bucket('event').query({
      '#sort': ['id@asc']
    }).all();

    for (const schedule of schedules) {
      items[`data:events:schedule:${schedule.id}`] = schedule;
    }
    for (const event of events) {
      items[`content:events:event:${event.id}`] = event;
    }

    return items;
  });
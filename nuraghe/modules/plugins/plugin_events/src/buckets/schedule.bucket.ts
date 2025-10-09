import nesoi from '$';

export default nesoi.bucket('plugin_events::schedule')
  .model($ => ({
    __nrge: $.literal<`content:${number}:events:schedule`>(/content:\d+:events:schedule/),
    id: $.string, // ULID
    event_id: $.string,
    location_id: $.string,
    start_datetime: $.datetime,
    end_datetime: $.datetime,
    description: $.string.optional
  }))
  .graph($ => ({
    location: $.one('plugin_info::location', {
      id: {'.':'location_id'}
    })
  }));
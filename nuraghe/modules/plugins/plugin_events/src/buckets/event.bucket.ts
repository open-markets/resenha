import nesoi from '$';

export default nesoi.bucket('plugin_events::event')
  .model($ => ({
    __nrge: $.literal<`content:${number}:events:event`>(/content:\d+:events:event/),
    id: $.string, // ULID
    hash: $.string,
    alias: $.string,
    description: $.string,
    calendar_id: $.string,
    locations_ids: $.list($.string),
    schedules_ids: $.list($.string),
    contents_ids: $.list($.string),
    contacts_ids: $.list($.string),
    properties: $.list($.union(
      $.obj({
        id: $.string.optional,
        type: $.enum(['service']),
        subtype: $.enum(['food','music','arts','other']),
        alias: $.string,
        description: $.string,
        value: $.string
      }),
      $.obj({
        type: $.enum(['structure']),
        subtype: $.enum(['bathroom','seating','parking','climate','accessibility','other']),
        alias: $.string,
        service_ids: $.list($.string).optional,
        description: $.string.optional
      }),
      $.obj({
        type: $.enum(['condition']),
        required: $.boolean,
        alias: $.string,
        description: $.string,
      }),
    )),
  }))

  .graph($ => ({
    locations: $.many('plugin_info::location', {
      'id in': {'.': 'locations_ids'}
    }),
    contacts: $.many('plugin_info::contact', {
      'id in': {'.': 'contacts_ids'}
    }),
    contents: $.many('core::content', {
      'id in': {'.': 'contents_ids'}
    }),
    schedules: $.compose.many('schedule', {
      'id in': {'.': 'schedules_ids'}
    }),
  }))

  .view('full', $ => ({
    ...$.raw(),
    locations: $.graph('locations'),
    contacts: $.graph('contacts'),
    contents: $.graph('contents'),
    schedules: $.graph('schedules'),
  }));
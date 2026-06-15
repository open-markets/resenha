import nesoi from '$';

export default nesoi.message('plugin_events::asset_event')
  .template($ => ({
    type: $.enum('event_type'),
    subtype: $.enum('event_subtype.{type}'),
    
    alias: $.string,
    description: $.string,
    
    contacts: $.list($.msg('info::contact')),
    schedules: $.list($.msg('info_schedule')),
    
    // contents_ids: $.list($.string),

    properties: $.list($.union(
      $.obj({
        type: $.enum(['service']),
        subtype: $.enum(['food','music','others']),
        alias: $.string,
        description: $.string,
        value: $.string
      }),
      $.obj({
        type: $.enum(['structure']),
        subtype: $.enum(['bathroom','seating','parking','climate','accessibility','other']),
        alias: $.string,
        service_ids: $.list($.string).optional,
        description: $.string.optional,
      }),
      $.obj({
        type: $.enum(['condition']),
        required: $.boolean,
        alias: $.string,
        description: $.string,
      }),
    )),

    hash: $.string,
  }))
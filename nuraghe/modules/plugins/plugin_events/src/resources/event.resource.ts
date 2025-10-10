 
import nesoi from '$';
import { ulid } from 'ulid';

export default nesoi.resource('plugin_events::event')
  .bucket('event')
  .view()
  .query()
  .create($ => $
    .input($ => ({
      hash: $.string,
      alias: $.string,
      description: $.string,
      calendar_id: $.string,
      contacts_ids: $.list($.id('plugin_info::contact')),
      locations_ids: $.list($.id('plugin_info::location')),
      schedules_ids: $.list($.id('schedule')),
      contents_ids: $.list($.id('content::content')),
      properties: $.list($.union(
        $.obj({
          id: $.string.optional,
          type: $.enum(['service'] as const),
          subtype: $.enum(['food','music','arts','other'] as const),
          alias: $.string,
          description: $.string,
          value: $.string
        }),
        $.obj({
          type: $.enum(['structure'] as const),
          subtype: $.enum(['bathroom','seating','parking','climate','accessibility','other'] as const),
          alias: $.string,
          service_ids: $.list($.string).optional,
          description: $.string.optional
        }),
        $.obj({
          type: $.enum(['condition'] as const),
          required: $.boolean,
          alias: $.string,
          description: $.string,
        }),
      )),
    }))
    .prepare($ => ({
      __nrge: 'content:1:events:event',
      id: ulid(),
      hash: $.msg.hash,
      alias: $.msg.alias,
      description: $.msg.description,
      calendar_id: $.msg.calendar_id,
      contacts_ids: $.msg.contacts_ids.map(i => i.id),
      locations_ids: $.msg.locations_ids.map(i => i.id),
      schedules_ids: $.msg.schedules_ids.map(i => i.id),
      contents_ids: $.msg.contents_ids.map(i => i.id),
      properties: $.msg.properties
    }))
  )
  .update($ => $
    .input($ => ({
      hash: $.string.optional,
      alias: $.string.optional,
      description: $.string.optional,
      calendar_id: $.string.optional,
      contacts_ids: $.list($.id('plugin_info::contact')).optional,
      locations_ids: $.list($.id('plugin_info::location')).optional,
      schedules_ids: $.list($.id('schedule')).optional,
      contents_ids: $.list($.id('content::content')).optional,
      properties: $.list($.union(
        $.obj({
          id: $.string.optional,
          type: $.enum(['service'] as const),
          subtype: $.enum(['food','music','arts','other'] as const),
          alias: $.string,
          description: $.string,
          value: $.string
        }),
        $.obj({
          type: $.enum(['structure'] as const),
          subtype: $.enum(['bathroom','seating','parking','climate','accessibility','other'] as const),
          alias: $.string,
          service_ids: $.list($.string).optional,
          description: $.string.optional
        }),
        $.obj({
          type: $.enum(['condition'] as const),
          required: $.boolean,
          alias: $.string,
          description: $.string,
        }),
      )).optional,
    }))
    .prepare($ => ({
      hash: $.msg.hash,
      alias: $.msg.alias,
      description: $.msg.description,
      calendar_id: $.msg.calendar_id,
      contacts_ids: $.msg.contacts_ids?.map(i => i.id),
      locations_ids: $.msg.locations_ids?.map(i => i.id),
      schedules_ids: $.msg.schedules_ids?.map(i => i.id),
      contents_ids: $.msg.contents_ids?.map(i => i.id),
      properties: $.msg.properties
    }))
  )
  .delete($ => $);
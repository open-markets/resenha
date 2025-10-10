import nesoi from '$';
import { ulid } from 'ulid';

export default nesoi.resource('plugin_info::contact')
  .bucket('contact')
  .view()
  .query()
  .create($ => $
    .input($ => ({
      type: $.enum(['email','phone','social_media','other'] as const),
      value: $.string
    }))
    .prepare($ => ({
      __nrge: 'data:1:info:contact',
      id: ulid(),
      type: $.msg.type,
      value: $.msg.value,
    }))
  )
  .update($ => $
    .input($ => ({
      type: $.enum(['email','phone','social_media','other'] as const).optional,
      value: $.string.optional
    }))
    .prepare($ => ({
      type: $.msg.type,
      value: $.msg.value,
    }))
  )
  .delete($ => $);
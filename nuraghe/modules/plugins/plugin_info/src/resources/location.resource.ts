import nesoi from '$';
import { ulid } from 'ulid';

export default nesoi.resource('plugin_info::location')
  .bucket('location')
  .view()
  .query()
  .create($ => $
    .input($ => ({
      type: $.enum(['email','phone','social_media','other'] as const),
      name: $.string,
      address: $.id('address')
    }))
    .prepare($ => ({
      __nrge: 'data:1:info:location',
      id: ulid(),
      name: $.msg.name,
      address_id: $.msg.address.id,
    }))
  )
  .update($ => $
    .input($ => ({
      name: $.string.optional,
      address: $.id('address').optional
    }))
    .prepare($ => ({
      name: $.msg.name,
      address_id: $.msg.address?.id,
    }))
  )
  .delete($ => $);
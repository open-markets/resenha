import nesoi from '$';
import { ulid } from 'ulid';

export default nesoi.resource('plugin_info::address')
  .bucket('address')
  .view()
  .query()
  .create($ => $
    .input($ => ({
      lat: $.float,
      lon: $.float,
      country: $.string,
      state: $.string,
      city: $.string,
      street: $.string.optional,
      number: $.string.optional,
      extra: $.string.optional,
      reference: $.string.optional,
    }))
    .prepare($ => ({
      __nrge: 'data:1:info:address',
      id: ulid(),
      lat: $.msg.lat,
      lon: $.msg.lon,
      country: $.msg.country,
      state: $.msg.state,
      city: $.msg.city,
      street: $.msg.street,
      number: $.msg.number,
      extra: $.msg.extra,
      reference: $.msg.reference,
    }))
  )
  .update($ => $
    .input($ => ({
      lat: $.float.optional,
      lon: $.float.optional,
      country: $.string.optional,
      state: $.string.optional,
      city: $.string.optional,
      street: $.string.optional.nullable,
      number: $.string.optional.nullable,
      extra: $.string.optional.nullable,
      reference: $.string.optional.nullable,
    }))
    .prepare($ => ({
      lat: $.msg.lat,
      lon: $.msg.lon,
      country: $.msg.country,
      state: $.msg.state,
      city: $.msg.city,
      street: $.msg.street,
      number: $.msg.number,
      extra: $.msg.extra,
      reference: $.msg.reference,
    }))
  )
  .delete($ => $);
import nesoi from '$';
import { ulid } from 'ulid';

export default nesoi.resource('publisher::publisher')
  .bucket('publisher::publisher')
  .view()
  .query()
  .create($ => $
    .input($ => ({
      alias: $.string,
      description: $.string.optional,
      uris: $.list($.string)
    }))
    .prepare($ => ({
      __nrge: 'publisher:1',
      id: ulid(),
      alias: $.msg.alias,
      description: $.msg.description,
      uris: $.msg.uris
    }))
  )
  .update($ => $);
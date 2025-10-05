import nesoi from '$';
import { ulid } from 'ulid';

export default nesoi.resource('tracker::tracker')
  .bucket('tracker::tracker')
  .view()
  .query()
  .create($ => $
    .input($ => ({
      alias: $.string,
      description: $.string.optional,
      uris: $.list($.string)
    }))
    .prepare($ => ({
      __nrge: 'tracker:1',
      id: ulid(),
      alias: $.msg.alias,
      description: $.msg.description,
      uris: $.msg.uris
    }))
  )
  .update($ => $);
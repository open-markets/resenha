import nesoi from '$';
import { ulid } from 'ulid';

export default nesoi.resource('publisher::publisher')
  .bucket('publisher')
  .view()
  .query()
  .create($ => $
    .auth('publisher')
    .input($ => ({
      alias: $.string,
      description: $.string.optional,
      uris: $.list($.string),
      auth: $.union(
        $.obj({
          type: $.enum(['password'] as const),
          password: $.string
        }),
      ).optional
    }))
    .prepare($ => ({
      __nrge: 'publisher:1',
      id: ulid(),
      alias: $.msg.alias,
      description: $.msg.description,
      uris: $.msg.uris,
      auth: $.msg.auth
    }))
  )
  .update($ => $
    .auth('publisher')
    .input($ => ({
      alias: $.string.optional,
      description: $.string.optional.nullable,
      uris: $.list($.string).optional,
      auth: $.union(
        $.obj({
          type: $.enum(['password'] as const),
          password: $.string
        }),
      ).optional.nullable
    }))
    .prepare($ => ({
      alias: $.msg.alias,
      description: $.msg.description,
      uris: $.msg.uris,
      auth: $.msg.auth
    }))
  )
  .delete($ => $
    .auth('publisher')
  );
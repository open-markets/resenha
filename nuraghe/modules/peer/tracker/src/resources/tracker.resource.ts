import nesoi from '$';
import { ulid } from 'ulid';

export default nesoi.resource('tracker::tracker')
  .auth('tracker')
  .bucket('tracker::tracker')
  .view()
  .query()
  .create($ => $
    .auth('tracker')
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
      __nrge: 'tracker:1',
      id: ulid(),
      alias: $.msg.alias,
      description: $.msg.description,
      uris: $.msg.uris,
      auth: $.msg.auth
    }))
  )
  .update($ => $
    .auth('tracker')
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
    .auth('tracker')
  );
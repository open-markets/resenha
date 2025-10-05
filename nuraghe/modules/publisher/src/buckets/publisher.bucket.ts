import nesoi from '$';

export default nesoi.bucket('publisher::publisher')
  .model($ => ({
    __nrge: $.literal<`publisher:${number}`>(/publisher:\d/),
    id: $.string, // ULID
    alias: $.string,
    description: $.string.optional,
    uris: $.list($.string),

    auth: $.union(
      $.obj({
        __t: $.enum(['password']),
        password: $.string.encrypt('PUBLISHER_CRYPTO_KEY')
      })
    ).optional
  }));
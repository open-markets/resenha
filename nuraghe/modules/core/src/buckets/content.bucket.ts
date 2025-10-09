import nesoi from '$';

export default nesoi.bucket('core::content')
  .model($ => ({
    __nrge: $.literal<`content:${number}`>(/content:\d+/),
    id: $.string, // ULID
    publisher_id: $.string,
    hash: $.string,
    
    published_at: $.datetime,
    expires_at: $.datetime.optional,
    
    uri: $.string,
    plugin: $.string,
    metadata: $.dict($.any),
    
    data: $.file({
      extnames: ['.nrge.content']
    }),

    auth: $.union(
      $.obj({
        __t: $.enum(['password']),
        password: $.string.encrypt('CONTENT_CRYPTO_KEY')
      }),
      $.obj({
        __t: $.enum(['otp']),
        otp: $.string.encrypt('CONTENT_CRYPTO_KEY')
      }),
    ).optional
  }));
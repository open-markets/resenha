import nesoi from '$';

export default nesoi.bucket('content::content')
  .model($ => ({
    __nrge: $.literal<`content:${number}`>(/content:\d+/),
    id: $.string, // ULID
    publisher_id: $.string,
    hash: $.string,

    alias: $.string,
    description: $.string,
    
    published_at: $.datetime,
    expires_at: $.datetime.optional,
    
    uri: $.string,
    plugin: $.string,
    metadata: $.dict($.any),
    
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
  }))
  .view('publish', $ => ({
    publisher_id: $.model('publisher_id'),
    hash: $.model('hash'),
    alias: $.model('alias'),
    description: $.model('description'),
    published_at: $.model('published_at'),
    expires_at: $.model('expires_at'),
    uri: $.model('uri'),
    plugin: $.model('plugin'),
    metadata: $.model('metadata'),
    data: $.computed($ => $.trx.job('plugin::content.publish').run({
      content: $.raw
    }))
  }));
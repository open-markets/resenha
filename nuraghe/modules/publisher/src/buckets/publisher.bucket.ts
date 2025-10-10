import nesoi from '$';

export default nesoi.bucket('publisher::publisher')
  .model($ => ({
    __nrge: $.literal<`publisher:${number}`>(/publisher:\d+/),
    id: $.string, // ULID
    alias: $.string,
    description: $.string.optional,
    uris: $.list($.string),

    auth: $.union(
      $.obj({
        type: $.enum(['password']),
        password: $.string.encrypt('PUBLISHER_CRYPTO_KEY')
      }),
    ).optional
  }))
  .graph($ => ({
    'contents': $.many('core::content', {
      'publisher_id': {'.':'id'}
    })
  }))
  .view('publish', $ => ({
    alias: $.model('alias'),
    description: $.model('description'),
    uris: $.model('uris'),
    contents: $.graph('contents', 'publish')
  }));
import nesoi from '$';

export default nesoi.bucket('tracker::tracker')
  .model($ => ({
    __nrge: $.literal<`tracker:${number}`>(/tracker:\d+/),
    id: $.string, // ULID
    alias: $.string,
    description: $.string.optional,
    uris: $.list($.string),

    auth: $.union(
      $.obj({
        type: $.enum(['password']),
        password: $.string.encrypt('TRACKER_CRYPTO_KEY')
      }),
    ).optional
  }))
  .graph($ => ({
    'contents': $.many('content::content', {
      'publisher_id': {'.':'id'}
    })
  }))
  .view('publish', $ => ({
    alias: $.model('alias'),
    description: $.model('description'),
    uris: $.model('uris'),
    contents: $.graph('contents', 'publish')
  }));
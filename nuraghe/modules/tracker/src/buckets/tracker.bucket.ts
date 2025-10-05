import nesoi from '$';

export default nesoi.bucket('tracker::tracker')
  .model($ => ({
    __nrge: $.literal<`tracker:${number}`>(/tracker:\d/),
    id: $.string, // ULID
    alias: $.string,
    description: $.string.optional,
    uris: $.list($.string),
  }));
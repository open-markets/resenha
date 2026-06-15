import nesoi from '$';

export default nesoi.bucket('core::tracker')
  .model($ => ({
    id: $.string, // ULID
    alias: $.string,
    description: $.string.optional,
    uris: $.list($.string)
  }));
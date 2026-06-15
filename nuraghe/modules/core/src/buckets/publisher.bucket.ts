import nesoi from '$';

export default nesoi.bucket('core::publisher')
  .model($ => ({
    id: $.string, // ULID
    alias: $.string,
    description: $.string.optional,
    
    type: $.enum('publisher_type'),
    subtype: $.enum('publisher_subtype'),
    
    uris: $.list($.string),
  }));
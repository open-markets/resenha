import nesoi from '$';

export default nesoi.bucket('plugin_info::contact')
  .model($ => ({
    __nrge: $.literal<`data:${number}:info:contact`>(/data:\d+:info:contact/),
    id: $.string, // ULID
    type: $.enum(['email','phone','social_media','other']),
    value: $.string
  }));
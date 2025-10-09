import nesoi from '$';

export default nesoi.bucket('plugin_info::contact')
  .model($ => ({
    __nrge: $.literal<`content:${number}:info:contact`>(/content:\d+:info:contact/),
    id: $.string, // ULID
    type: $.enum(['email','phone','social_media','other']),
    value: $.string
  }));
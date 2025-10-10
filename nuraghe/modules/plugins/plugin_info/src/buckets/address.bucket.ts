import nesoi from '$';

export default nesoi.bucket('plugin_info::address')
  .model($ => ({
    __nrge: $.literal<`data:${number}:info:address`>(/data:\d+:info:address/),
    id: $.string, // ULID
    lat: $.float,
    lon: $.float,
    country: $.string,
    state: $.string,
    city: $.string,
    street: $.string.optional,
    number: $.string.optional,
    extra: $.string.optional,
    reference: $.string.optional,
  }));
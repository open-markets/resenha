import nesoi from '$';

export default nesoi.message('info::location')
  .template($ => ({    
    publisher_id: $.string.optional,

    alias: $.string,
    description: $.string,

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
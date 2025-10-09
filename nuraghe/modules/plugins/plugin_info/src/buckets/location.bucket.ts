import nesoi from '$';

export default nesoi.bucket('plugin_info::location')
  .model($ => ({
    __nrge: $.literal<`content:${number}:info:location`>(/content:\d+:info:location/),
    id: $.string, // ULID
    name: $.string,
    address_id: $.string
  }))
  .graph($ => ({
    address: $.one('address', {
      'id': {'.': 'address_id'}
    })
  }))
  .view('default', $ => ({
    ...$.raw(),
    address: $.graph('address')
  }));
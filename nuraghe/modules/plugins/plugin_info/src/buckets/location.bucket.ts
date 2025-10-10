import nesoi from '$';

export default nesoi.bucket('plugin_info::location')
  .model($ => ({
    __nrge: $.literal<`data:${number}:info:location`>(/data:\d+:info:location/),
    id: $.string, // ULID
    name: $.string,
    address_id: $.string
  }))
  .graph($ => ({
    address: $.one('address', {
      'id': {'.': 'address_id'}
    })
  }))
  .view('publish', $ => ({
    ...$.raw(),
    address: $.graph('address')
  }));
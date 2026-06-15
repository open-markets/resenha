import nesoi from '$';

export default nesoi.message('assets::image')
  .template($ => ({
    file: $.file(),  
    owners: $.list($.obj({
      kind: $.enum(['person','publisher']),
      id: $.string,
      frac: $.int
    })),
  }))
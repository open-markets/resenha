import nesoi from '$';

export default nesoi.job('socket::publisher.sync')
  .message('', $ => ({
    uri: $.string
  }))
  .input('@')
  .method(async $ => {
    const publisher = await $.trx.bucket('publisher').readOneOrFail($.msg.uri);
    await $.trx.bucket('publisher::publisher').put(publisher);
  });
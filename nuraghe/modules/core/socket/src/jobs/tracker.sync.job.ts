import nesoi from '$';

export default nesoi.job('socket::tracker.sync')
  .message('', $ => ({
    uri: $.string
  }))
  .input('@')
  .method(async $ => {
    const tracker = await $.trx.bucket('tracker').readOneOrFail($.msg.uri);
    await $.trx.bucket('tracker::tracker').put(tracker);
  });
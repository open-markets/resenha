import nesoi from '$';

export default nesoi.job('consumer::publisher.sync')
  .message('', $ => ({
    uri: $.string,
    auth: $.string.optional
  }))
  .input('@')
  .method($ => {
    // Request URI
    // Parse BSON
    // Validate Nuraghe file
  });
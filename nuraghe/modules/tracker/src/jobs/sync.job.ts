import nesoi from '$';

export default nesoi.job('tracker::sync')
  .message('', $ => ({
    token: $.string
  }))
  .input('@')
  .method(async $ => {
        
  });
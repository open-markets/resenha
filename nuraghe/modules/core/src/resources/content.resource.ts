import nesoi from '$';

export default nesoi.resource('core::content')
  .bucket('content')
  
  .auth('mono')

  .query('default')
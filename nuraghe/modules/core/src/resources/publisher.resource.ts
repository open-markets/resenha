import nesoi from '$';

export default nesoi.resource('core::publisher')
  .bucket('publisher')
  
  .auth('mono')

  .query('default')
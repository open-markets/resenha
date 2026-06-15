import nesoi from '$';

export default nesoi.resource('core::tracker')
  .bucket('tracker')
  
  .auth('mono')
  
  .query('default')
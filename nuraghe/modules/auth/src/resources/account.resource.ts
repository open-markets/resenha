import nesoi from '$';

export default nesoi.resource('auth::account')
  .bucket('account')
  
  .auth('mono')

  .query('default')
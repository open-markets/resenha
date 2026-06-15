import nesoi from '$';

export default nesoi.resource('auth::invite_token')
  .bucket('invite_token')
  
  .auth('mono')

  .query('default')
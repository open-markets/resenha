import nesoi from '$';

export default nesoi.resource('auth::person')
  .bucket('person')
  
  .auth('mono')

  .query('default')
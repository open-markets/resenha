import nesoi from '$';

export default nesoi.resource('content::content')
  .bucket('content::content')
  .view()
  .query();
import nesoi from '$';

export default nesoi.resource('publisher::content')
  .bucket('core::content')
  .view()
  .query()
  .create($ => $)
  .update($ => $)
  .delete($ => $);
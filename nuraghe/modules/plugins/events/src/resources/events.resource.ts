import nesoi from '$';

export default nesoi.resource('events::event')
  .bucket('events::event')
  .view()
  .query()
  .create($ => $)
  .update($ => $)
  .delete($ => $);
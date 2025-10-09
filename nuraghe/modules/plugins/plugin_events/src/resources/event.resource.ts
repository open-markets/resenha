import nesoi from '$';

export default nesoi.resource('plugin_events::event')
  .bucket('plugin_events::event')
  .view()
  .query()
  .create($ => $)
  .update($ => $)
  .delete($ => $);
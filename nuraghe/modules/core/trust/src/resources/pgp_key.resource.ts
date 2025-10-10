import nesoi from '$';

export default nesoi.resource('trust::pgp_key')
  .bucket('trust::pgp_key')
  .view()
  .query()
  .create($ => $);
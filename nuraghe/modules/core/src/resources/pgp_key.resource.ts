import nesoi from '$';

export default nesoi.resource('core::pgp_key')
  .bucket('core::pgp_key')
  .view()
  .query()
  .create($ => $);
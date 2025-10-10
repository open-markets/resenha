import nesoi from '$';

export default nesoi.bucket('trust::pgp_key')
  .model($ => ({
    id: $.string,
    type: $.enum(['publisher', 'tracker']),
    owner_id: $.string,
    value: $.string
  }));
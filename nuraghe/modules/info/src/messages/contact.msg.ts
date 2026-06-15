import nesoi from '$';

export default nesoi.message('info::contact')
  .template($ => ({
    type: $.enum(['email','phone','social_media','other']),
    value: $.string
  }));
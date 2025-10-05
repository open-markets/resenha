import nesoi from '$';

export default nesoi.externals('events')

  .bucket('info::address')
  .bucket('info::contact')
  .bucket('info::location')
  .bucket('info::media')
  .bucket('publisher::publisher');
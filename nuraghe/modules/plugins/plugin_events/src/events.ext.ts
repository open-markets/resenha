import nesoi from '$';

export default nesoi.externals('plugin-events')

  .bucket('content::content')
  .bucket('plugin_info::address')
  .bucket('plugin_info::contact')
  .bucket('plugin_info::location')
  .bucket('publisher::publisher');
import nesoi from '$';

export default nesoi.externals('backup')
  .bucket('publisher::publisher')
  .bucket('tracker::tracker')
  .job('plugin::backup')
  .job('plugin::restore');
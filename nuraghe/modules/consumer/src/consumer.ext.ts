import nesoi from '$';

export default nesoi.externals('consumer')
  .bucket('core::content')
  .bucket('publisher::publisher')
  .bucket('tracker::tracker');
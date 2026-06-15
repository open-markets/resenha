import nesoi from "$";

export default nesoi.externals('auth')
    .bucket('core::content')
    .bucket('core::publisher')
    .enum('core::publisher_type')
    .enum('core::publisher_subtype')
    .enum('core::publisher_subtype.music')
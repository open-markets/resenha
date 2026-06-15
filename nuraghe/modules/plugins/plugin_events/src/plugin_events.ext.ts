import nesoi from "$";

export default nesoi.externals('plugin_events')
    .bucket('core::asset')
    .bucket('core::content')
    .message('info::contact')
    .message('info::location')
    .message('assets::image')
    .job('assets::image.create')
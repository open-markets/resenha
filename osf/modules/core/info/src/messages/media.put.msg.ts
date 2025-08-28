import nesoi from "$";

export default nesoi.message('info::media.put')
    .template($ => $.extend('media.create', {
        id: $.string
    }))
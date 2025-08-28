import nesoi from "$";

export default nesoi.message('info::address.put')
    .template($ => $.extend('address.create', {
        id: $.string
    }))
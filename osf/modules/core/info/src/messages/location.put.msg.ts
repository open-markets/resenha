import nesoi from "$";

export default nesoi.message('info::location.put')
    .template($ => $.extend('location.create', {
        id: $.string,
        address: $.msg('address.put')
    }))
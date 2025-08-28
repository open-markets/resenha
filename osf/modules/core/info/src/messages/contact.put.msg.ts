import nesoi from "$";

export default nesoi.message('info::contact.put')
    .template($ => $.extend('contact.create', {
        id: $.string
    }))
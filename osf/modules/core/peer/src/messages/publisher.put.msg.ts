import nesoi from "$";

export default nesoi.message('peer::publisher.put')
    .template($ => $.extend('publisher.create', {
        id: $.string
    }))
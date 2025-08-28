import nesoi from "$";

export default nesoi.message('schedule::schedule.put')
    .template($ => $.extend('schedule.create', {
        id: $.string,
    }))
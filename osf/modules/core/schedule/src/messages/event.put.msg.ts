import nesoi from "$";

export default nesoi.message('schedule::event.put')
    .template($ => $.extend('event.create', {
        id: $.string,
        locations: $.list($.msg('info::location.put')),
        schedules: $.list($.msg('schedule.put')),
        medias: $.list($.msg('info::media.put')),
        contacts: $.list($.msg('info::contact.put')),
    }))
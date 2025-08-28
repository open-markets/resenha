import nesoi from "$";

export default nesoi.message('schedule::calendar.put')
    .template($ => $.extend('calendar.create', {
        id: $.string,
        publisher: $.msg('peer::publisher.put'),
        events: $.list($.msg('event.put'))
    }))
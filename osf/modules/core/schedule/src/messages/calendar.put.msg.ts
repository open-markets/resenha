import nesoi from "$";

export default nesoi.message('schedule::calendar.put')
    .template($ => ({
        __osf: $.enum(['calendar:1.0']),
        id: $.string.optional,
        hash: $.string,
        alias: $.string,
        description: $.string,
        publisher: $.msg('peer::publisher.put'),
        uri: $.string,
        recover_uri: $.string.optional,
        events: $.list($.msg('event.put'))
    }))
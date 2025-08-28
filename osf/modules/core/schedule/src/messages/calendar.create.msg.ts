import nesoi from "$";

export default nesoi.message('schedule::calendar.create')
    .template($ => ({
        __osf: $.enum(['calendar:1.0']),
        hash: $.string,
        alias: $.string,
        description: $.string,
        publisher: $.msg('peer::publisher.create'),
        uri: $.string,
        recover_uri: $.string.optional,
        events: $.list($.msg('event.create'))
    }))
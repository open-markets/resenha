import nesoi from "$";

export default nesoi.message('schedule::event.put')
    .template($ => ({
        __osf: $.enum(['event:1.0']),
        id: $.string.optional,
        hash: $.string.optional,
        alias: $.string,
        description: $.string,
        calendar: $.id('calendar'),
        locations: $.list($.msg('info::location.put')),
        contacts: $.list($.msg('info::contact.put')),
        medias: $.list($.msg('info::media.put')),
        schedules: $.list($.msg('schedule.put')),
        properties: $.list($.union(
            $.obj({
                id: $.string.optional,
                type: $.enum(['service']),
                subtype: $.enum(['food','music','arts','other']),
                alias: $.string,
                description: $.string,
                value: $.string
            }),
            $.obj({
                id: $.string.optional,
                type: $.enum(['structure']),
                subtype: $.enum(['bathroom','seating','parking','climate','accessibility','other']),
                alias: $.string,
                services_ids: $.list($.union($.string, $.int)).optional,
                description: $.string.optional
            }),
            $.obj({
                id: $.string.optional,
                type: $.enum(['condition']),
                required: $.boolean,
                alias: $.string,
                description: $.string,
            }),
        )),
    }))
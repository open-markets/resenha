import nesoi from "$";

export default nesoi.message('schedule::event.create')
    .template($ => ({
        __osf: $.enum(['event:1.0']),
        hash: $.string,
        alias: $.string,
        description: $.string,
        calendar_id: $.string,
        locations: $.list($.msg('info::location.create')),
        schedules: $.list($.msg('schedule.create')),
        medias: $.list($.msg('info::media.create')),
        contacts: $.list($.msg('info::contact.create')),
        properties: $.list($.union(
            $.obj({
                id: $.string,
                type: $.enum(['service']),
                subtype: $.enum(['food','music','arts','other']),
                alias: $.string,
                description: $.string,
                value: $.string
            }),
            $.obj({
                id: $.string,
                type: $.enum(['structure']),
                subtype: $.enum(['bathroom','seating','parking','climate','accessibility','other']),
                alias: $.string,
                service_ids: $.list($.string).optional,
                description: $.string.optional
            }),
            $.obj({
                id: $.string,
                type: $.enum(['condition']),
                required: $.boolean,
                alias: $.string,
                description: $.string,
            }),
        )),
    }))
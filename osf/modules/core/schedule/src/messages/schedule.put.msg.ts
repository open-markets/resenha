import nesoi from "$";

export default nesoi.message('schedule::schedule.put')
    .template($ => ({
        __osf: $.enum(['schedule:1.0']),
        id: $.string.optional,
        location_id: $.union($.string, $.int),
        start_datetime: $.datetime,
        end_datetime: $.datetime,
        description: $.string.optional
    }))
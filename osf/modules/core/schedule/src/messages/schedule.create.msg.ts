import nesoi from "$";

export default nesoi.message('schedule::schedule.create')
    .template($ => ({
        __osf: $.enum(['schedule:1.0']),
        event_id: $.string,
        location_id: $.string,
        start_datetime: $.datetime,
        end_datetime: $.datetime,
        description: $.string.optional
    }))
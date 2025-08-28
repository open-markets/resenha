import nesoi from "$";
import { Version } from "../../../info/lib/types";

export default nesoi.bucket('schedule::event')
    .model($ => ({
        __osf: $.literal<`event:${Version}`>(/event:\d+.\d+/),
        id: $.string, // ULID
        hash: $.string,
        alias: $.string,
        description: $.string,
        calendar_id: $.string,
        locations_ids: $.list($.string),
        schedules_ids: $.list($.string),
        medias_ids: $.list($.string),
        contacts_ids: $.list($.string),
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

    .graph($ => ({
        locations: $.many('info::location', {
            'id in': {'.': 'locations_ids'}
        }),
        schedules: $.compose.many('schedule', {
            'id in': {'.': 'schedules_ids'}
        }),
        medias: $.compose.many('info::media', {
            'id in': {'.': 'medias_ids'}
        }),
        contacts: $.many('info::contact', {
            'id in': {'.': 'contacts_ids'}
        }),
    }))

    .view('full', $ => ({
        ...$.raw(),
        locations: $.graph('locations'),
        schedules: $.graph('schedules'),
        medias: $.graph('medias'),
        contacts: $.graph('contacts'),
    }))
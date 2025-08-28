import nesoi from "$";
import { Version } from "../../../info/lib/types";

export default nesoi.bucket('schedule::calendar')
    .model($ => ({
        __osf: $.literal<`calendar:${Version}`>(/calendar:\d+.\d+/),
        id: $.string, // ULID        
        hash: $.string,
        alias: $.string,
        description: $.string,
        publisher_id: $.string,
        uri: $.string,
        recover_uri: $.string.optional,
        events_ids: $.list($.string)
    }))
    .graph($ => ({
        publisher: $.one('peer::publisher', {
            'id': {'.':'publisher_id'}
        }),
        events: $.many('event', {
            'id in': {'.':'events_ids'}
        })
    }))
    .view('full', $ => ({
        ...$.raw(),
        publisher: $.graph('publisher'),
        events: $.graph('events', 'full')
    }))
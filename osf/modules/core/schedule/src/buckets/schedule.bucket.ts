import nesoi from "$";
import { Version } from "../../../info/lib/types";

export default nesoi.bucket('schedule::schedule')
    .model($ => ({
        __osf: $.literal<`schedule:${Version}`>(/schedule:\d+.\d+/),
        id: $.string, // ULID
        event_id: $.string,
        location_id: $.string,
        start_datetime: $.datetime,
        end_datetime: $.datetime,
        description: $.string.optional
    }))
    .graph($ => ({
        location: $.one('info::location', {
            id: {'.':'location_id'}
        })
    }))
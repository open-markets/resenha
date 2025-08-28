import nesoi from "$";
import { Version } from "../../lib/types";

export default nesoi.bucket('info::contact')
    .model($ => ({
        __osf: $.literal<`contact:${Version}`>(/contact:\d+.\d+/),
        id: $.string, // ULID
        type: $.enum(['email','phone','social_media','other']),
        value: $.string
    }))
import nesoi from "$";
import { ulid } from "ulid";

export default nesoi.resource('publisher::publisher')
    .bucket('peer::publisher')
    .view()
    .query()
    .create($ => $
        .input($ => ({
            alias: $.string,
            description: $.string.optional,
            uri: $.string
        }))
        .prepare($ => ({
            __osf: 'publisher:1.0',
            id: ulid(),
            alias: $.msg.alias,
            description: $.msg.description,
            uri: $.msg.uri
        }))
    )
    .update($ => $
        .input($ => ({
            alias: $.string.optional,
            description: $.string.optional.nullable,
            uri: $.string.optional
        }))
        .prepare($ => ({
            __osf: 'publisher:1.0',
            alias: $.msg.alias,
            description: $.msg.description,
            uri: $.msg.uri
        }))
    )
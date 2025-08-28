import nesoi from "$";
import { ulid } from "ulid";

export default nesoi.resource('publisher::calendar')
    .bucket('schedule::calendar')
    .view()
    .query()
    .create($ => $
        .input($ => ({
            id: $.string, // ULID
            alias: $.string,
            description: $.string,
            publisher: $.id('peer::publisher'),
            uri: $.string,
            recover_uri: $.string
        }))
        .prepare($ => ({
            __osf: 'calendar:1.0',
            id: ulid(),
            hash: 'HASH',
            alias: $.msg.alias,
            description: $.msg.description,
            publisher_id: $.msg.publisher.id,
            uri: $.msg.uri,
            recover_uri: $.msg.recover_uri,
            events_ids: []
        }))
    )
    .update($ => $
        .input($ => ({
            alias: $.string.optional,
            description: $.string.optional
        }))
        .prepare($ => ({
            __osf: 'calendar:1.0',
            hash: 'HASH',
            alias: $.msg.alias,
            description: $.msg.description
        }))
    )
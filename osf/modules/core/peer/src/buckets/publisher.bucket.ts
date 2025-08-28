import nesoi from "$";

export default nesoi.bucket('peer::publisher')
    .model($ => ({
        __osf: $.literal<`publisher:${number}:${number}`>(/publisher:\d+.\d+/),
        id: $.string, // ULID
        alias: $.string,
        description: $.string.optional,
        uri: $.string
    }))
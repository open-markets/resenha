import nesoi from "$";

export default nesoi.message('peer::publisher.put')
    .template($ => ({
        __osf: $.enum(['publisher:1.0']),
        id: $.string.optional,
        alias: $.string,
        description: $.string.optional,
        uri: $.string
    }))
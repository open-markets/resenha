import nesoi from "$";

export default nesoi.message('peer::publisher.create')
    .template($ => ({
        __osf: $.enum(['publisher:1.0']),
        alias: $.string,
        description: $.string.optional,
        uri: $.string
    }))
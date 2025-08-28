import nesoi from "$";

export default nesoi.message('info::address.create')
    .template($ => ({
        __osf: $.enum(['address:1.0']),

        lat: $.float,
        lon: $.float,

        country: $.string,
        state: $.string,
        city: $.string,
        street: $.string.optional,
        number: $.string.optional,
        extra: $.string.optional,
        reference: $.string.optional,
    }))
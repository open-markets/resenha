import nesoi from "$";

export default nesoi.message('info::location.put')
    .template($ => ({
        __osf: $.enum(['location:1.0']),
        id: $.string.optional,
        name: $.string,
        address: $.msg('address.put')
    }))
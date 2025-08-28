import nesoi from "$";

export default nesoi.message('info::location.create')
    .template($ => ({
        __osf: $.enum(['location:1.0']),
        name: $.string,
        address: $.msg('address.create')
    }))
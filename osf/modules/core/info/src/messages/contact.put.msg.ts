import nesoi from "$";

export default nesoi.message('info::contact.put')
    .template($ => ({
        __osf: $.enum(['contact:1.0']),
        id: $.string.optional,
        type: $.enum(['email','phone','social_media','other']),
        value: $.string
    }))
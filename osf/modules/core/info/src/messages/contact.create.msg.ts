import nesoi from "$";

export default nesoi.message('info::contact.create')
    .template($ => ({
        __osf: $.enum(['contact:1.0']),
        type: $.enum(['email','phone','social_media','other']),
        value: $.string
    }))
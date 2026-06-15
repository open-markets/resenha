import nesoi from "$";

export default nesoi.constants('plugin_events')
    .enum('event_type', $ => ({
        'music': $.opt({ alias: 'Música' })
    }))
    .enum('event_subtype.music', $ => ({
        'concert': $.opt({ alias: 'Show' }),
    }))
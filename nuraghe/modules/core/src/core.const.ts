import nesoi from "$";

export default nesoi.constants('core')
    
    .enum('plugin', $ => ({
        'events': $.opt({ alias: 'Eventos' })
    }))
    .enum('plugin_content.events', $ => ({
        'event': $.opt({ alias: 'Evento' })
    }))
    .enum('plugin_asset.events', $ => ({
        'event': $.opt({ alias: 'Evento' })
    }))
    .enum('plugin_info.events', $ => ({
        'schedule': $.opt({ alias: 'Agendamento' })
    }))

    .enum('publisher_type', $ => ({
        'music': $.opt({ alias: 'Música' })
    }))
    .enum('publisher_subtype.music', $ => ({
        'band': $.opt({ alias: 'Banda' }),
        'label': $.opt({ alias: 'Selo' }),
        'venue': $.opt({ alias: 'Casa de Shows' })
    }))
import nesoi from "$";

export default nesoi.job('schedule::event.create')
    .input('@')
    .method(async $ => {

        const event = $.msg;

        for (const location of event.locations) {
            await $.trx.bucket('info::address').create(location.address);
            await $.trx.bucket('info::location').create({
                ...location,
                address_id: location.address.id
            });
        }
        for (const contact of event.contacts) {
            await $.trx.bucket('info::contact').create(contact);
        }
        await $.trx.bucket('event').create({
            ...event,
            locations_ids: event.locations.map(x => x.id),
            schedules_ids: event.schedules.map(x => x.id),
            medias_ids: event.medias.map(x => x.id),
            contacts_ids: event.contacts.map(x => x.id),
            '#composition': {
                schedules: event.schedules,
                medias: event.medias
            }
        });

        return $.trx.bucket('event').readOne($.msg.id);
    })
import nesoi from "$";
import { EventBucket } from ".nesoi/schedule.module";
import { ulid } from "ulid";
import { Hash } from 'nesoi/lib/engine/util/hash'

export default nesoi.job('schedule::event.put')
    .input('@')
    .method(async $ => {

        const event = $.msg;

        const locations_ids: string[] = [];
        for (const location of event.locations) {
            const address = await $.trx.bucket('info::address').put({
                ...location.address,
                id: location.address.id ?? ulid()
            });
            const l = await $.trx.bucket('info::location').put({
                ...location,
                id: location.id ?? ulid(),
                address_id: address.id
            });
            locations_ids.push(l.id);
        }

        const contacts_ids: string[] = [];
        for (const contact of event.contacts) {
            const c = await $.trx.bucket('info::contact').put({
                ...contact,
                id: contact.id ?? ulid()
            });
            contacts_ids.push(c.id);
        }
        
        const medias_ids: string[] = [];
        for (const media of event.medias) {
            const m = await $.trx.bucket('info::media').put({
                ...media,
                id: media.id ?? ulid()
            });
            medias_ids.push(m.id);
        }
        
        const event_id = event.id ?? ulid();

        const schedules_ids: string[] = [];
        for (const schedule of event.schedules) {
            let location_id;
            switch (typeof schedule.location_id) {
                case 'string': location_id = schedule.location_id; break;
                case 'number': location_id = schedules_ids[schedule.location_id]; break;
            }
            const m = await $.trx.bucket('schedule').put({
                ...schedule,
                id: schedule.id ?? ulid(),
                event_id: event_id,
                location_id
            });
            schedules_ids.push(m.id);
        }

        const services_ids: string[] = [];
        const properties: EventBucket['#data']['properties'] = [];
        for (const prop of event.properties) {
            if (prop.type !== 'service') continue;
            properties.push({
                ...prop,
                id: prop.id ?? ulid()
            })
        }
        for (const prop of event.properties) {
            if (prop.type !== 'structure') continue;
            properties.push({
                ...prop,
                id: prop.id ?? ulid(),
                ['services_ids' as any]: ('services_ids' in prop) ? prop.services_ids?.map(s => {
                    switch (typeof s) {
                        case 'string': return s;
                        case 'number': return services_ids[s];
                    }
                }) : []
            })
        }
        for (const prop of event.properties) {
            if (prop.type !== 'condition') continue;
            properties.push({
                ...prop,
                id: prop.id ?? ulid()
            })
        }

        const input = {
            ...event,
            id: event_id,
            hash: '',
            calendar_id: event.calendar.id,
            locations_ids,
            contacts_ids,
            medias_ids,
            schedules_ids,
            properties
        }

        const pre = await $.trx.bucket('event').buildOne(input, 'full')

        const hash = Hash.string(JSON.stringify(pre, undefined, 2));

        if (event.hash && hash !== event.hash) {
            throw new Error('Hash inválida');
        }

        const e = await $.trx.bucket('event').put({
            ...input,
            hash
        });

        return $.trx.bucket('event').buildOne(e, 'full')
    })
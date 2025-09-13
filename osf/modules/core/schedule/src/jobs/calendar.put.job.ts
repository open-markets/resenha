import nesoi from "$";
import { ulid } from "ulid";

export default nesoi.job('schedule::calendar.put')
    .input('@')
    .method(async $ => {

        const publisher = await $.trx.bucket('peer::publisher').put({
            ...$.msg.publisher,
            id: $.msg.publisher.id ?? ulid()
        });
        
        const events_ids: string[] = [];
        for (const event of $.msg.events) {
            const e = await $.trx.job('event.put').forward({
                ...event,
                id: event.id ?? ulid()
            } as any);
            events_ids.push(e);
        }

        const c = await $.trx.bucket('calendar').put({
            ...$.msg,
            id: $.msg.id ?? ulid(),
            publisher_id: publisher.id,
            events_ids
        });

        return $.trx.bucket('calendar').buildOne(c, 'full');
    })
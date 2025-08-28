import nesoi from "$";

export default nesoi.job('schedule::calendar.put')
    .input('calendar.put')
    .method(async $ => {

        await $.trx.bucket('peer::publisher').put($.msg.publisher);
        
        for (const event of $.msg.events) {
            await $.trx.job('event.put').forward(event as any);
        }

        await $.trx.bucket('calendar').put({
            ...$.msg,
            publisher_id: $.msg.publisher.id,
            events_ids: $.msg.events.map(x => x.id)
        });

        return $.trx.bucket('calendar').readOne($.msg.id);
    })
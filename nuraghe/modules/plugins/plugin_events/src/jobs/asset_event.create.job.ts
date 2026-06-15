import nesoi from "$";
import { NesoiDatetime } from "nesoi/lib/engine/data/datetime";
import { ulid } from "ulid";

export default nesoi.job('plugin_events::asset_event.create')

    .auth('mono', $ => $.owner_type === 'publisher')

    .message('', $ => ({
        public: $.boolean,
        data: $.msg('asset_event')
    }))
    .input('@')

    .method(async $ => {
        const acc = await $.trx.user('mono');
        return $.trx.bucket('core::asset').create({
            id: ulid(),

            public: $.msg.public,
            publisher_id: acc.owner_id,

            plugin: 'events',
            data_type: 'event',
            data: $.msg.data,

            published_at: NesoiDatetime.now()
        })
    })
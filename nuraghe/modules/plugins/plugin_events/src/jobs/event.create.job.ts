import nesoi from "$";

export default nesoi.job('plugin_events::event.create')

    .auth('mono', $ => $.owner_type === 'publisher')

    .message('', $ => ({
        public: $.boolean,
        
        metadata: $.dict($.any),
        assets: $.obj({
            cover: $.msg('assets::image'),
            event: $.msg('asset_event')
        }),
    }))
    .input('@')

    .method(async $ => {
        // Assets

        const cover = await $.trx.job('image.create').run({
            public: $.msg.public,
            data: $.msg.cover
        });

        const event = await $.trx.job('asset_event.create').run({
            public: $.msg.public,
            data: $.msg.assets.event
        });

        // Content

        return {
            metadata: {},
            assets: {
                cover: cover.id,
                event: event.id,
            }
        };
    })
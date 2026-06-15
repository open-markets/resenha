import nesoi from "$";
import PluginVirtualModule from "../../../../lib/plugin.virtual_module";
import { NesoiDatetime } from "nesoi/lib/engine/data/datetime";
import { Tag } from "nesoi/lib/engine/dependency";
import { ulid } from "ulid";

export default nesoi.job('core::publish')

    .auth('mono', $ => $.owner_type === 'publisher')

    .message('', $ => ({
        public: $.boolean,

        alias: $.string,
        description: $.string,
                
        plugin: $.enum('plugin'),
        plugin_content: $.enum('plugin_content'),
        plugin_metadata: $.dict($.any),

        thumbnail: $.msg('assets::image'),

        assets: $.dict($.string)
    }))
    .input('@')

    .method(async $ => {
        const acc = await $.trx.user('mono');
        
        const thumbnail = await $.trx.job('image.create').run({
            public: $.msg.public,
            data: $.msg.thumbnail
        });

        const module = new PluginVirtualModule($.msg.plugin);
        const tag = new Tag(`plugin_${$.msg.plugin}`, 'job', `${$.msg.plugin_content}.create`);
        module.externals.jobs.push(tag);

        const content = await $.trx.virtual(module, trx => 
            trx.job(tag.full).run({
                public: $.msg.public,
                alias: $.msg.alias,
                description: $.msg.description,
                metadata: $.msg.plugin_metadata,
                assets: $.msg.assets
            })
        );

        return $.trx.bucket('core::content').create({
            id: ulid(),
            publisher_id: acc.owner_id,

            public: $.msg.public,
            alias: $.msg.alias,
            description: $.msg.description,

            hash: '...',
            published_at: NesoiDatetime.now(),
            
            plugin: 'events',
            plugin_metadata: content.metadata,
            
            assets: {
                thumbnail: thumbnail.id,
                ...content.assets
            },
            children: {}
        })
    })
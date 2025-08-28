import nesoi from "$";

export default nesoi.message('schedule::media.create')
    .template($ => ({
        __osf: $.enum(['media:1.0']),
        type: $.enum([
            'feed.tiktok', 'feed.instagram', 'feed.facebook', 'feed.linkedin',
            'image',
            'video.youtube', 'video.vimeo', 'video.google-drive',
            'other'
        ]),
        uri: $.string,
        description: $.string.optional
    }))
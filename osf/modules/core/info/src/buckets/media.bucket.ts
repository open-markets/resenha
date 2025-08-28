import nesoi from "$";
import { Version } from "../../../info/lib/types";

export default nesoi.bucket('info::media')
    .model($ => ({
        __osf: $.literal<`media:${Version}`>(/media:\d+.\d+/),
        id: $.string, // ULID
        type: $.enum([
            'feed.tiktok', 'feed.instagram', 'feed.facebook', 'feed.linkedin',
            'image',
            'video.youtube', 'video.vimeo', 'video.google-drive',
            'other'
        ]),
        uri: $.string,
        description: $.string.optional
    }))
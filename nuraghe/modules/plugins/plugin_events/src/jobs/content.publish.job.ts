 
 
import nesoi from '$';
import { Content } from '.nesoi/content.module';

export default nesoi.job('plugin_events::content.publish')
  .message('', $ => ({
    content: $.ts<Content>()
  }))
  .input('@')
  .method(async $ => {
    
    type Metadata = {
      event_id: string
    }
    const metadata = $.msg.content.metadata as Metadata;
    
    if (!('event_id' in metadata) || typeof metadata.event_id !== 'string') {
      throw new Error(`Invalid plugin 'events' metadata for content ${$.msg.content.id} ('${$.msg.content.alias}')`);
    }

    const data = await $.trx.bucket('event')
      .viewOneOrFail(metadata.event_id, 'publish');

    const payload = btoa(JSON.stringify(data));
    return payload;      
  });
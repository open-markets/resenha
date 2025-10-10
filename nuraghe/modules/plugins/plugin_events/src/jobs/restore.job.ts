 
 
 
 
import nesoi from '$';

export default nesoi.job('plugin_events::restore')
  .message('', $ => ({
    items: $.dict($.dict($.any))
  }))
  .input('@')
  .method(async $ => {

    for (const key in $.msg.items) {
      const [ntype, plugin, type] = key.split(':');
      if (ntype !== 'data') continue;
      if (plugin !== 'events') continue;
      if (type !== 'schedule') continue;
      
      await $.trx.bucket(type).put($.msg.items[key] as never);
    }

    for (const key in $.msg.items) {
      const [ntype, plugin, type] = key.split(':');
      if (ntype !== 'content') continue;
      if (plugin !== 'events') continue;
      if (type !== 'event') continue;

      await $.trx.bucket(type).put($.msg.items[key] as never);
    }
  });
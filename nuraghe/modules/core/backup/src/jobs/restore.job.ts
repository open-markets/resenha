 
 
 

import nesoi from '$';
import { Tracker } from '.nesoi/tracker.module';
import { Publisher } from '.nesoi/publisher.module';

export default nesoi.job('backup::restore')
  .auth('publisher')
  
  .message('', $ => ({
    backup: $.id('backup')
  }))
  .input('@')
  
  .extra(async $ => ({
    publisher: await $.trx.user('publisher')
  }))
  .assert($ => 
    $.msg.backup.module === 'publisher'
    || 'Backup is not a publisher database'
  )
  .assert($ => 
    $.msg.backup.owner_id === $.extra.publisher.id
    || 'You don\'t own this backup'
  )

  .method(async $ => {
    
    const { node, plugin } = $.msg.backup;

    // [node]

    for (const key in node) {
      const [module] = key.split(':');
      if (module === 'publisher') {
        await $.trx.bucket('publisher::publisher').put(node[key] as Publisher);
      }
      else if (module === 'tracker') {
        await $.trx.bucket('tracker::tracker').put(node[key] as Tracker);
      }
    }

    // [data] and [content]

    await $.trx.job('plugin::restore').run({
      items: plugin
    });
    
  });
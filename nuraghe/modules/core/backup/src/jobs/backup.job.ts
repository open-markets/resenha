/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
 
 
import nesoi from '$';
import { Publisher } from '.nesoi/publisher.module';
import { Tracker } from '.nesoi/tracker.module';
import { NesoiDatetime } from 'nesoi/lib/engine/data/datetime';
import { Hash } from 'nesoi/lib/engine/util/hash';

export default nesoi.job('backup::backup')
  .auth('publisher')
  .auth('consumer')
  .auth('tracker')
  
  .message('', $ => ({
    module: $.string,
    owner_id: $.string
  }))
  .input('@')
  
  .method(async $ => {
    type Module = 'publisher'|'tracker'
    type Id = string

    const node: {
      [x: `${Module}:${Id}`]: Publisher | Tracker
    } = {};

    // [node]

    const publishers = await $.trx.bucket('publisher::publisher').query({
      '#sort': ['id@asc']
    }).all();
    for (const publisher of publishers) {
      node[`publisher:${publisher.id}`] = publisher;
    }

    const trackers = await $.trx.bucket('tracker::tracker').query({
      '#sort': ['id@asc']
    }).all();
    for (const tracker of trackers) {
      node[`tracker:${tracker.id}`] = tracker;
    }

    // [data] and [content]

    const plugin = await $.trx.job('plugin::backup').run({});

    const hash = Hash.merge({
      node: JSON.stringify(node),
      plugin: JSON.stringify(plugin)
    });

    const user = await $.trx.user('publisher', 'consumer', 'tracker');

    await $.trx.bucket('backup').create({
      __nrge: 'backup:1',
      module: user.type,
      owner_id: user.id,
      hash,
      backup_at: NesoiDatetime.now(),
      node,
      plugin
    });    
  });
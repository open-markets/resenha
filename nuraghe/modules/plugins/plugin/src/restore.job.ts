 
 
 
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import nesoi from '$';
import { Daemon } from 'nesoi/lib/engine/daemon';
import { TrxNode } from 'nesoi/lib/engine/transaction/trx_node';
import { ExternalTrxNode } from 'nesoi/lib/engine/transaction/nodes/external.trx_node';
import { Tag } from 'nesoi/lib/engine/dependency';

export default nesoi.job('plugin::restore')
  .message('', $ => ({
    items: $.dict($.dict($.any))
  }))
  .input('@')
  .method(async $ => {
    const daemon = TrxNode.getModule($.trx).daemon!;
    const modules = Daemon.getModules(daemon);

    for (const module of modules) {
      if (!module.name.startsWith('plugin_')) continue;

      const ext_trx = new ExternalTrxNode($.trx, new Tag(module.name, 'bucket', '*'));
      await ext_trx.run(() => undefined, trx => 
        trx.job('restore').run({
          items: $.msg.items
        } as never)
      );
    }
  });
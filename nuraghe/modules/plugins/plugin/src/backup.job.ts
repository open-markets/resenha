 
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import nesoi from '$';
import { Daemon } from 'nesoi/lib/engine/daemon';
import { TrxNode } from 'nesoi/lib/engine/transaction/trx_node';
import { ExternalTrxNode } from 'nesoi/lib/engine/transaction/nodes/external.trx_node';
import { Tag } from 'nesoi/lib/engine/dependency';

export default nesoi.job('plugin::backup')
  .message('', () => ({}))
  .input('@')
  .method(async $ => {
    const daemon = TrxNode.getModule($.trx).daemon!;
    const modules = Daemon.getModules(daemon);

    type Plugin = string
    type Type = string
    type Id = string
    
    const items: {
      [x: `${'data'|'content'}:${Plugin}:${Type}:${Id}`]: Record<string, any>
    } = {};

    for (const module of modules) {
      if (!module.name.startsWith('plugin_')) continue;

      const ext_trx = new ExternalTrxNode($.trx, new Tag(module.name, 'bucket', '*'));
      const plugin = await ext_trx.run(() => undefined, trx => 
        trx.job('backup').run({} as never)
      ) as { plugin: typeof plugin };

      Object.assign(plugin, plugin.plugin);
    }

    return items;
  });
 
 
 
 
 
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import nesoi from '$';
import { Daemon } from 'nesoi/lib/engine/daemon';
import { TrxNode } from 'nesoi/lib/engine/transaction/trx_node';
import { ExternalTrxNode } from 'nesoi/lib/engine/transaction/nodes/external.trx_node';
import { Tag } from 'nesoi/lib/engine/dependency';
import { Content } from '.nesoi/core.module';

export default nesoi.job('plugin::content.publish')
  .message('', $ => ({
    content: $.ts<Content>()
  }))
  .input('@')
  .method(async $ => {
    const daemon = TrxNode.getModule($.trx).daemon!;
    const modules = Daemon.getModules(daemon);

    const module = modules.find(m => m.name === `plugin_${$.msg.content.plugin}`);
    if (!module) {
      throw new Error(`Plugin '${$.msg.content.plugin}' not found`);
    }
  
    const ext_trx = new ExternalTrxNode($.trx, new Tag(module.name, 'bucket', '*'));
    return ext_trx.run(() => undefined, trx => 
      trx.job('content.publish').run({
        content: $.msg.content
      } as never)
    );
  });
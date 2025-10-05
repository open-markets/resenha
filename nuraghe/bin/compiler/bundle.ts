import { Compiler } from 'nesoi/lib/compiler';
import { Log } from 'nesoi/lib/engine/util/log';
import Nesoi from '../../nesoi';
import * as fs from 'fs';
import path from 'path';
import UI from 'nesoi/lib/engine/cli/ui';
import { MonolythApp } from 'nesoi/lib/engine/apps/monolyth/monolyth.app';
import { BrowserApp } from 'nesoi/lib/engine/apps/browser/browser.app';
import Shell from 'nesoi/lib/engine/util/shell';

Log.level = process.argv.includes('--debug') ? 'debug' : 'info';

async function main() {
  const app = process.argv[2] || (await UI.select('Pick an app to build:', [
    '[No App, Elements only]',
    ...fs.readdirSync('./apps')
  ])).value;

  /* Elements */

  const dotNesoiPath = path.join(process.cwd(), '.nesoi');
  if (fs.existsSync(dotNesoiPath)) {
    fs.rmSync(dotNesoiPath, {
      recursive: true
    });
  }

  // Nesoi compiler, used to compile the TypeScript schemas into JavaScript
  const compiler = await new Compiler(Nesoi, {
    exclude: ['*.test.ts']
  }).run();

  /* App */

  if (app !== '[No App, Elements only]') {
    if (app.includes('browser')) {
      await BrowserApp.compile(compiler, './apps/'+app);
    }
    else {
      await MonolythApp.compile(compiler, './apps/'+app);
    }
  }

  // TODO: find out what stays open requiring this
  process.exit();
}

void main();

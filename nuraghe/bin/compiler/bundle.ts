import { Compiler } from 'nesoi/lib/compiler';
import { Log } from 'nesoi/lib/engine/util/log';
import nesoi from '../../nesoi';
import * as fs from 'fs';
import path from 'path';
import { MonolythBundler } from 'nesoi/lib/bundler/monolyth/monolyth.bundler';
import { BrowserBundler } from 'nesoi/lib/bundler/browser/browser.bundler';
import script from 'nesoi/lib/engine/cli/script';

const args = script('bundle', $ => $
  .d('Bundles some Monolyth Application')
  .arg('app', $ => $.d('Name of the app to run')
    .value($ => $
      .enum({
        'publisher': '[NodeJS] Nuraghe Publisher',
        'publisher-browser': '[Browser] Nuraghe Publisher'
      })
    )
  )
  .arg('--debug', '-d', $ => $.d('Enable debug logging'))
).init();

Log.level = args.debug ? 'debug' : 'info';

async function main() {

  // Clean .nesoi
  const dotNesoiPath = path.join(process.cwd(), '.nesoi');
  if (fs.existsSync(dotNesoiPath)) {
    fs.rmSync(dotNesoiPath, {
      recursive: true
    });
  }

  // Nesoi compiler, used to compile the TypeScript schemas into JavaScript
  const compiler = await new Compiler(nesoi, {
    exclude: ['*.test.ts']
  }).run();

  // Nesoi Monolyth Bundler, used to create a Monolyth NPM package
  const filename = {
    'publisher': './apps/publisher.app.ts',
    'publisher-browser': './apps/publisher.browser.app.ts'
  }[args.app];
  
  if (args.app.includes('browser')) {
    await new BrowserBundler(compiler, filename).run();
  }
  else {
    await new MonolythBundler(compiler, filename).run();
  }

  // TODO: find out what stays open requiring this
  process.exit();
}

void main();

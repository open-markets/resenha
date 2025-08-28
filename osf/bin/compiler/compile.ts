import { Compiler } from 'nesoi/lib/compiler';
import { Log } from 'nesoi/lib/engine/util/log';
import Nesoi from '../../nesoi';

Log.level = 'info';

async function main() {

  // Nesoi compiler, used to compile the TypeScript schemas into JavaScript
  await new Compiler(Nesoi, {
    exclude: ['*.test.ts']
  }).run();

}

void main();
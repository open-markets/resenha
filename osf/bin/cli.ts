Error.stackTraceLimit = Infinity;
import 'nesoi/tools/dotenv';

import { Log } from 'nesoi/lib/engine/util/log';

import App from '../apps/example.app';

Log.level = process.argv.includes('--debug') ? 'debug' : 'info';

async function main() {
  const app = await App.daemon({
    watch: process.argv.includes('--watch')
  });

  const argv = process.argv.slice(2).filter(a => !['--debug', '--watch'].includes(a));
  await app.cli(argv.join(' '));
  
  process.exit();
}

void main();

import nesoi from '$';
import * as path from 'path';
import { LocalNesoiFile } from 'nesoi/lib/engine/data/file';
import { ulid } from 'ulid';
import { Log } from 'nesoi/lib/engine/util/log';

export default nesoi.job('publisher::publish')
  .auth('publisher')
  
  .message('', () => ({}))
  .input('@')
  
  .method(async $ => {
    
    const publisher = await $.trx.user('publisher');
    const data = await $.trx.bucket('publisher')
      .viewOneOrFail(publisher.id, 'publish');

    const str = JSON.stringify(data, undefined, 2);
    
    const filepath = path.join(process.cwd(), 'tmp', ulid());
    const file = LocalNesoiFile.new(filepath, str);

    Log.info('publisher','publish',`Publisher '${publisher.id}' published to file '${filepath}'`, file);
    
  });
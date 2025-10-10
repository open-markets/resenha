import nesoi from '$';
import * as path from 'path';
import { LocalNesoiFile } from 'nesoi/lib/engine/data/file';
import { ulid } from 'ulid';
import { Log } from 'nesoi/lib/engine/util/log';

export default nesoi.job('tracker::publish')
  .auth('tracker')
  
  .message('', () => ({}))
  .input('@')
  
  .method(async $ => {
    
    const tracker = await $.trx.user('tracker');
    const data = await $.trx.bucket('tracker')
      .viewOneOrFail(tracker.id, 'publish');

    const str = JSON.stringify(data, undefined, 2);
    
    const filepath = path.join(process.cwd(), 'tmp', ulid());
    const file = LocalNesoiFile.new(filepath, str);

    Log.info('tracker','publish',`Tracker '${tracker.id}' published to file '${filepath}'`, file);
  });
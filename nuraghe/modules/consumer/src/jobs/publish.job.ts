import nesoi from '$';
import * as path from 'path';
import { LocalNesoiFile } from 'nesoi/lib/engine/data/file';
import { ulid } from 'ulid';

export default nesoi.job('consumer::publish')
  .auth('consumer')
  
  .message('', () => ({}))
  .input('@')
  
  .method(async $ => {
    
    const consumer = await $.trx.user('consumer');
    const data = await $.trx.bucket('consumer')
      .viewOneOrFail(consumer.id, 'publish');

    // console.log({data});

    const str = JSON.stringify(data, undefined, 2);
    
    const filepath = path.join(process.cwd(), 'tmp', ulid());
    const file = LocalNesoiFile.new(filepath, str);

    // LocalNesoiFile.delete(file);
  });
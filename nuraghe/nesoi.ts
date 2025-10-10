import { Space } from 'nesoi/lib/engine/space';
import ExampleProject from '.nesoi/space';

export default new Space<ExampleProject>(__dirname)
  .auth('consumer', $ => ({
    id: $.string,
    type: $.enum(['consumer'])
  }))
  .auth('publisher', $ => ({
    id: $.string,
    type: $.enum(['publisher'])
  }))
  .auth('tracker', $ => ({
    id: $.string,
    type: $.enum(['tracker'])
  }));
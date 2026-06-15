import { Space } from 'nesoi/lib/engine/space';
import Nuraghe from '.nesoi/space';

export default new Space<Nuraghe>(__dirname)
  .auth('mono', $ => ({
    id: $.string,
    person_id: $.string,
    owner_type: $.enum(['publisher', 'tracker']),
    owner_id: $.string,
    permissions: $.dict($.any)
  }));
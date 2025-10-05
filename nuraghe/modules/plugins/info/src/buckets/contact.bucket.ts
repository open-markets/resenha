import nesoi from '$';
import { Version } from '../../../../../lib/types';

export default nesoi.bucket('info::contact')
  .model($ => ({
    __nrge: $.literal<`content:${Version}:info:contact`>(/content:\d+:info:contact/),
    id: $.string, // ULID
    type: $.enum(['email','phone','social_media','other']),
    value: $.string
  }));
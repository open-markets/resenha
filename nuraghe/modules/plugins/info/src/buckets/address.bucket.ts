import nesoi from '$';
import { Version } from '../../../../../lib/types';

export default nesoi.bucket('info::address')
  .model($ => ({
    __nrge: $.literal<`content:${Version}:info:address`>(/content:\d+:info:address/),

    id: $.string, // ULID
        
    lat: $.float,
    lon: $.float,

    country: $.string,
    state: $.string,
    city: $.string,
    street: $.string.optional,
    number: $.string.optional,
    extra: $.string.optional,
    reference: $.string.optional,
  }));
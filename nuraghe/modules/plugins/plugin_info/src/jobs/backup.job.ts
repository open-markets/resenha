/* eslint-disable @typescript-eslint/no-explicit-any */
 
 
 
import nesoi from '$';

export default nesoi.job('plugin_info::backup')
  .message('', () => ({}))
  .input('@')
  .method(async $ => {

    type Plugin = string
    type Type = string
    type Id = string
    
    const items: {
      [x: `${'data'|'content'}:${Plugin}:${Type}:${Id}`]: Record<string, any>
    } = {};

    const addresses = await $.trx.bucket('address').query({
      '#sort': ['id@asc']
    }).all();
    const contacts = await $.trx.bucket('contact').query({
      '#sort': ['id@asc']
    }).all();
    const locations = await $.trx.bucket('location').query({
      '#sort': ['id@asc']
    }).all();

    for (const address of addresses) {
      items[`data:info:address:${address.id}`] = address;
    }
    for (const contact of contacts) {
      items[`data:info:contact:${contact.id}`] = contact;
    }
    for (const location of locations) {
      items[`data:info:location:${location.id}`] = location;
    }

    return items;
  });
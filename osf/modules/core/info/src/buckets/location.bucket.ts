import nesoi from "$";
import { Version } from "../../lib/types";

export default nesoi.bucket('info::location')
    .model($ => ({
        __osf: $.literal<`location:${Version}`>(/location:\d+.\d+/),
        id: $.string, // ULID
        name: $.string,
        address_id: $.string
    }))
    .graph($ => ({
        address: $.one('address', {
            'id': {'.': 'address_id'}
        })
    }))
    .view('default', $ => ({
        ...$.raw(),
        address: $.graph('address')
    }))
import nesoi from "$";
import { NesoiError } from "nesoi/lib/engine/data/error";

export default nesoi.job('consumer::calendar.sync')
    .message('', $ => ({
        uri: $.string,
        token: $.string.optional
    }))
    .input('@')
    .method(async $ => {
        const response = await fetch($.msg.uri, {
            method: 'GET',
            headers: $.msg.token ? {
                'Authorization': `OSF ${$.msg.token}`
            } : undefined
        })
        .then((response) => {
            const body = response.body as any;
            if (response.status >= 400 && response.status <= 402) {
                throw new NesoiError.BaseError('OSF.Unauthorized', 'Falha de autorização ao sincronizar a agenda', response.status);
            }
            if (response.status >= 500) {
                throw new NesoiError.BaseError('OSF.InternalError', 'Falha de servidor ao sincronizar a agenda', response.status);
            }
            if (response.status !== 200) {
                throw new NesoiError.BaseError('OSF.UnknownError', body.error, response.status);
            }
            return body;
        });

        console.log(response);
    })
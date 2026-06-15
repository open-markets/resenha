import nesoi from "$";
import { NesoiDatetime } from "nesoi/lib/engine/data/datetime";
import { Token } from "../../lib/token";

export default nesoi.job('auth::login')
    .message('', $ => ({
        email: $.string,
        password: $.string,
    }))
    .input('@')
    .method(async $ => {
        // const session_token = await $.trx.bucket('session_token').create({
        //     account_id: $.msg.account_id,
        //     tracker_id: $.msg.tracker_id,
        //     email: $.msg.email,
        //     token: Token.make_opaque(),
        //     issued_at: NesoiDatetime.now(),
        //     expires_at: NesoiDatetime.now().plus('7 days')
        // });
        // return session_token.token;
    })
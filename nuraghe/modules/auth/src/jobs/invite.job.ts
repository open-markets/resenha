import nesoi from "$";
import { NesoiDatetime } from "nesoi/lib/engine/data/datetime";
import { Token } from "../../lib/token";
import { Log } from "nesoi/lib/engine/util/log";

export default nesoi.job('auth::invite')
    .message('', $ => ({
        email: $.string,
        publisher_id: $.string.optional,
    }))
    .input('@')
    .method(async $ => {
        const invite_token = await $.trx.bucket('invite_token').create({
            state: 'issued',
            email: $.msg.email,
            publisher_id: $.msg.publisher_id,
            token: Token.make_opaque(),
            issued_at: NesoiDatetime.now()
        });
        const mail = {
            subject: 'Seu convite para o Resenha',
            template: 'invite',
            data: {
                token: invite_token.token
            }
        }
        Log.info('job', 'auth::invite', 'TODO: Send e-mail.', mail)
    })
import Nuraghe from '.nesoi/space'
import { AuthnProvider, AuthToken } from 'nesoi/lib/engine/auth/authn';
import { AnyTrxNode } from 'nesoi/lib/engine/transaction/trx_node';

type Account = Nuraghe['authnUsers']['mono'];

export class MonoAuthnProvider extends AuthnProvider<Account, false> {
  eager = false as const;
  async authenticate($: { trx: AnyTrxNode, token: AuthToken }) {
    const token = await $.trx.bucket('auth::session_token').query({
      token: $.token
    }).firstOrFail();
    const account = await $.trx.bucket('auth::account').readOne(token.account_id);
    return Promise.resolve({
      user: {
        id: account.id,
        person_id: account.person_id,
        owner_type: account.owner_type,
        owner_id: (account.publisher_id ?? account.tracker_id)!,
        permissions: account.permissions
      }
    });
  }
}

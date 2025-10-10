import Nuraghe from '.nesoi/space'
import { AuthnProvider, AuthToken } from 'nesoi/lib/engine/auth/authn';
import { AnyTrxNode } from 'nesoi/lib/engine/transaction/trx_node';

type Account = Nuraghe['authnUsers']['consumer'];

export class ConsumerAuthnProvider extends AuthnProvider<Account, false> {
  eager = false as const;
  async authenticate($: { trx: AnyTrxNode, token: AuthToken }) {
    return Promise.resolve({
      user: {
        type: 'consumer' as const,
        id: ''
      }
    });
  }
}

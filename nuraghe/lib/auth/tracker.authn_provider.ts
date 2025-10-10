import Nuraghe from '.nesoi/space'
import { AuthnProvider, AuthToken } from 'nesoi/lib/engine/auth/authn';
import { AnyTrxNode } from 'nesoi/lib/engine/transaction/trx_node';

type Account = Nuraghe['authnUsers']['tracker'];

export class TrackerAuthnProvider extends AuthnProvider<Account, false> {
  eager = false as const;
  async authenticate($: { trx: AnyTrxNode, token: AuthToken }) {
    return Promise.resolve({
      user: {
        type: 'tracker' as const,
        id: 'fake-tracker'
      }
    });
  }
}

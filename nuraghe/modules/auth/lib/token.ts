// import { AdminDemoteToken } from '.nesoi/auth.module';
import { randomBytes } from 'crypto';
// import { NesoiDatetime } from 'nesoi/lib/engine/data/datetime';
// import { AnyTrxNode } from 'nesoi/lib/engine/transaction/trx_node';
// import { NesoiCrypto } from 'nesoi/lib/engine/util/crypto';
// import { Hash } from 'nesoi/lib/engine/util/hash';

export class Token {

  // opaque

  public static make_opaque(length = 128) {
    return randomBytes(length).toString('base64url');
  }

//   // login

//   public static async make_login(trx: AnyTrxNode, user_id: number) {
//     const token = this.make_opaque();
    
//     await trx.bucket('login_token').create({
//       user_id: user_id,
//       token,
//       expires_at: NesoiDatetime.now().plus('1 minute')
//     });

//     const raw = `${token}.${user_id}`;
//     return NesoiCrypto.encrypt(raw, trx.value('TOKEN_KEY'));
//   }

//   public static async check_login(trx: AnyTrxNode, encrypted_token: string) {
//     // Decrypt and split token
//     const decrypted = await NesoiCrypto.decrypt(encrypted_token, trx.value('TOKEN_KEY'));
//     const split = decrypted.split('.');
//     if (split.length !== 2) {
//       throw new Error ('Login Token inválido');
//     }
//     const [ token, user_id ] = split;

//     // Check if token exists on bucket
//     const login_token = await trx.bucket('login_token').query({ token }).first();
//     if (!login_token) {
//       throw new Error('Token de login inválido');
//     }
    
//     // Remove token from bucket
//     await trx.bucket('login_token').delete(login_token.id);

//     // Check token expiry
//     if (login_token.expires_at.epoch < NesoiDatetime.now().epoch) {
//       throw new Error('Token de login expirado');
//     }

//     return parseInt(user_id);
//   }

//   // api

//   public static async make_api(trx: AnyTrxNode, account_id: number) {
//     const opaque = this.make_opaque();
    
//     const token = await trx.bucket('api_token').create({
//       account_id: account_id,
//       issuer: 'celesttia',
//       token: opaque,
//       expires_at: NesoiDatetime.now().plus('8 hours')
//     });

//     const raw = `${opaque}.${account_id}`;
//     return {
//       token,
//       encrypted: await NesoiCrypto.encrypt(raw, trx.value('TOKEN_KEY'))
//     };
//   }

//   public static async check_api(trx: AnyTrxNode, encrypted_token: string) {
//     // Decrypt and split token
//     const decrypted = await NesoiCrypto.decrypt(encrypted_token, trx.value('TOKEN_KEY'));
//     const split = decrypted.split('.');
//     if (split.length !== 2) {
//       throw new Error ('Login Token inválido');
//     }
//     const [ token, account_id ] = split;

//     // Check if token exists on bucket
//     const api_token = await trx.bucket('api_token').query({
//       account_id,
//       token
//     }).first();
//     if (!api_token) {
//       throw new Error('API Token inválido');
//     }
    
//     // Check token expiry
//     if (api_token.expires_at.epoch < NesoiDatetime.now().epoch) {
//       throw new Error('API Token expirado');
//     }

//     return parseInt(account_id);
//   }

//   public static async delete_api(trx: AnyTrxNode, encrypted_token: string) {
//     // Decrypt and split token
//     const decrypted = await NesoiCrypto.decrypt(encrypted_token, trx.value('TOKEN_KEY'));
//     const split = decrypted.split('.');
//     if (split.length !== 2) {
//       throw new Error ('Login Token inválido');
//     }
//     const [ token, account_id ] = split;

//     // Check if token exists on bucket
//     const api_token = await trx.bucket('api_token').query({
//       account_id,
//       token
//     }).first();

//     // Delete if it exists
//     if (api_token) {
//       await trx.bucket('api_token').delete(api_token.id);
//     }
//   }

  // admin_demote


//   public static async make_admin_demote(trx: AnyTrxNode, $: Omit<AdminDemoteToken, 'id'|'token'|'expires_at'>) {
//     const opaque = this.make_opaque();
//     await trx.bucket('admin_demote_token').create({
//       ...$,
//       token: Hash.string(opaque),
//       expires_at: NesoiDatetime.now().plus('30 minutes')
//     })
    
//     return opaque;
//   }

}
import Nesoi from '$';
import { MonoAuthnProvider } from '../lib/auth/mono.authn_provider';
import { MonolythApp } from 'nesoi/lib/engine/app/native/monolyth.app';

import { ExpressService } from '@nesoi/plugin-express/express.service';
import { ExpressCLI } from '@nesoi/plugin-express/express.cli';
import { InsomniaCLI } from '@nesoi/plugin-insomnia/insomnia.cli';
import { ExpressControllerAdapter } from '@nesoi/plugin-express/express.controller_adapter';

export default new MonolythApp('nuraghe-publisher', Nesoi)

/**
   *  Package
   */

  .package({
    'name': '@nuraghe/publisher',
    'author': 'Hugo Aboud',
    'license': 'MIT'
  })

/**
   *  Modules
   */

  .modules([
    // core
    'core',
    'assets',
    'info',

    // auth
    'auth',

    // plugins
    'plugin_events'
  ])

  
/**
   *  Services
   */

  // REST API
  .service(
    new ExpressService(() => ({
      port: parseInt(process.env['SERVICE_EXPRESS_PORT'] || ''),
      authn: req => {
        const cookies = ExpressService.cookies(req);
        return {
          'mono': cookies['nuraghe-auth']
        };
      },
      debug: process.env['SERVICE_EXPRESS_DEBUG'] === 'true'
    }))
  )

  // TODO: Postgres
  
/**
   *  Environment Variables
   */

  .config.env($ => ({
    SERVICE_EXPRESS_PORT: $.int,
    SERVICE_EXPRESS_DEBUG: $.boolean,

    MODULE_AUTH_PASSWORD_CRYPTO_KEY: $.literal(/^[\w\d]{32}$/),
    MODULE_AUTH_PRIVATE_DATA_CRYPTO_KEY: $.literal(/^[\w\d]{32}$/)
  }))
  .config.dotenv('.env.publisher')

/**
   *  Authentication
   */

  .config.auth({
    'mono': () => new MonoAuthnProvider()
  })

  /**
   *  Modules
   */

  .config.module('core', {
    buckets: {
      // backup: {
      //   // adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      // }
    },
    trx: {
      // wrap: BrowserDBService.wrap('idb')
    }
  })

  .config.module('auth', {
    buckets: {
      // content: {
      //   // adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      // }
    },
    controllers: {
      api: {
        adapter: (module, $, {express}) => new ExpressControllerAdapter(module, $, express)
      },
    },
    trx: {
      // wrap: BrowserDBService.wrap('idb')
    }
  })

  .config.module('plugin_events', {
    buckets: {
    },
    trx: {
      // wrap: BrowserDBService.wrap('idb')
    }
  })

/**
   *  CLI & Compiler
   */

  .config.cli({
    adapters: {
      api: (cli, {express}) => new ExpressCLI(cli, express),
      insomnia: (cli, {express}) => new InsomniaCLI(cli, express)
    }
  })

  .config.compiler({
    nesoiVersion: 'file:/home/aboud/git/nesoi/build',
    libPaths: [
      'lib',
      'modules/auth/lib'
    ],
    staticPaths: [
    ],
    scripts: {
    }
  } as any);


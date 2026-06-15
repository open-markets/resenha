import Nesoi from '$';
// import { BrowserDBBucketAdapter } from 'nesoi/lib/elements/entities/bucket/adapters/browserdb.bucket_adapter';
// import { BrowserDBService } from 'nesoi/lib/elements/entities/bucket/adapters/browserdb.service';
import { BrowserApp } from 'nesoi/lib/engine/app/native/browser.app';

export default new BrowserApp('nuraghe-publisher-browser', Nesoi)

/**
   *  Package
   */

  .package({
    'name': '@nuraghe/publisher-browser',
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

  // .service(new BrowserDBService(() => ({
  //   dbName: 'nuraghe',
  //   dbVersion: 1,
  //   meta: {
  //     created_at: 'created_at',
  //     created_by: 'created_by',
  //     updated_at: 'updated_at',
  //     updated_by: 'updated_by',
  //   }
  // })))

/**
   *  Authentication
   */

  .config.auth({

  })

  /**
   *  Buckets
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
      // api: {
      //   adapter: (module, $, {express}) => new ExpressControllerAdapter(module, $, express)
      // },
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
   *  Compiler
   */


  .config.compiler({
    nesoiVersion: 'file:/home/aboud/git/nesoi/build_browser',
    libPaths: [
      'lib',
      'modules/auth/lib'
    ],
    staticPaths: [],
    scripts: {
    }
  } as any);


import Nesoi from '$';
import { BrowserApp } from 'nesoi/lib/engine/apps/browser/browser.app';
import { BrowserDBBucketAdapter } from 'nesoi/lib/elements/entities/bucket/adapters/browserdb.bucket_adapter';
import { BrowserDBService } from 'nesoi/lib/elements/entities/bucket/adapters/browserdb.service';

export default new BrowserApp('osf-browser', Nesoi)

  /**
   *  Package
   */

  .package({
    'author': 'Hugo Aboud',
    'license': 'MIT'
  })

  /**
   *  Modules
   */

  .modules([
    'info',
    'peer',
    'schedule',
    'consumer',
    'publisher',
    'tracker'
  ])

  
  /**
   *  Services
   */

  .service(new BrowserDBService({
    dbName: 'osf',
    dbVersion: 1,
    meta: {
      created_at: 'created_at',
      created_by: 'created_by',
      updated_at: 'updated_at',
      updated_by: 'updated_by',
    }
  }))

  /**
   *  Authentication
   */

  .config.authn({
    // Here you declare authentication providers for the authentication users
    // declared on the space (nesoi.ts)
  })

  /**
   *  Buckets
   */

  .config.module('info', {
    buckets: {
      address: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      contact: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      location: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      media: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
    },
    trash: {
      // Here you can configure the soft-delete behavior of this module
    }
  })

  .config.module('peer', {
    buckets: {
      publisher: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      }
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
    },
    trash: {
      // Here you can configure the soft-delete behavior of this module
    }
  })

  .config.module('schedule', {
    buckets: {
      calendar: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      event: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      schedule: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      }
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
    },
    trash: {
      // Here you can configure the soft-delete behavior of this module
    }
  })

  .config.module('consumer', {
    trx: {
      wrap: BrowserDBService.wrap('idb')
    }
  })

  .config.module('publisher', {
    trx: {
      wrap: BrowserDBService.wrap('idb')
    }
  })

  .config.module('tracker', {
    trx: {
      wrap: BrowserDBService.wrap('idb')
    }
  })

  /**
   *  i18N
   */

  // A map of translations for error messages
  //.config.i18n(
  //)

  /**
   *  CLI & Compiler
   */

  .config.cli({
    adapters: {
      // You can use this to add custom features to the app's CLI
    }
  })

  .config.compiler({
    nesoiVersion: 'file:/home/aboud/git/nesoi/build_browser',
    libPaths: [
      // Paths to be compiled by TypeScript and included on the final build (code)
    ],
    staticPaths: [
      // Paths to be included on the final build (static files)
    ],
    scripts: {
    }
  } as any);


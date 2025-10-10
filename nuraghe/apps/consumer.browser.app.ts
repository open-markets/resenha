import Nesoi from '$';
import { ConsumerAuthnProvider } from '../lib/auth/consumer.authn_provider';
import { PublisherAuthnProvider } from '../lib/auth/publisher.authn_provider';
import { TrackerAuthnProvider } from '../lib/auth/tracker.authn_provider';
import { BrowserDBBucketAdapter } from 'nesoi/lib/elements/entities/bucket/adapters/browserdb.bucket_adapter';
import { BrowserDBService } from 'nesoi/lib/elements/entities/bucket/adapters/browserdb.service';
import { MonolythApp } from 'nesoi/lib/engine/app/native/monolyth.app';

export default new MonolythApp('nuraghe-consumer-browser', Nesoi)

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
    // core
    'backup',
    'content',
    'socket',

    // peer
    'consumer',

    // plugins
    'plugin',
    'plugin_events',
    'plugin_info',
  ])

  
/**
   *  Services
   */

  .service(new BrowserDBService(() => ({
    dbName: 'nuraghe',
    dbVersion: 1,
    meta: {
      created_at: 'created_at',
      created_by: 'created_by',
      updated_at: 'updated_at',
      updated_by: 'updated_by',
    }
  })))

/**
   *  Authentication
   */

  .config.auth({
    'consumer': () => new ConsumerAuthnProvider(),
    'publisher': () => new PublisherAuthnProvider(),
    'tracker': () => new TrackerAuthnProvider()
  })

  /**
   *  Buckets
   */

  .config.module('backup', {
    buckets: {
      backup: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      }
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
    }
  })

  .config.module('content', {
    buckets: {
      content: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      }
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
    }
  })

  .config.module('socket', {
    buckets: {
      publisher: {
        // adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      tracker: {
        // adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      }
    },
    trx: {
      // wrap: BrowserDBService.wrap('idb')
    }
  })

  // .config.module('publisher', {
  //   buckets: {
  //     publisher: {
  //       adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
  //     },
  //   },
  //   trx: {
  //     wrap: BrowserDBService.wrap('idb')
  //   }
  // })

  // .config.module('tracker', {
  //   buckets: {
  //     tracker: {
  //       adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
  //     },
  //   },
  //   trx: {
  //     wrap: BrowserDBService.wrap('idb')
  //   }
  // })

  .config.module('plugin_events', {
    buckets: {
      event: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      schedule: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
    }
  })

  .config.module('plugin_info', {
    buckets: {
      address: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      contact: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      },
      location: {
        adapter: ($, {idb}) => new BrowserDBBucketAdapter($, idb)
      }
    },
    trx: {
      wrap: BrowserDBService.wrap('idb')
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


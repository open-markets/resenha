// Utilities
import { defineStore } from 'pinia'
import NesoiArchitect from 'osf-browser/app';
import type NesoiArchitectSpace from 'osf-browser/types/space';
import type { TrxNode } from '@nesoi/for-browser/lib/engine/transaction/trx_node';
import { ulid } from 'ulid';

export const useAppStore = defineStore('app', {
  state: () => ({
    daemon: undefined as never as NonNullable<typeof NesoiArchitect['_daemon']>
  }),
  actions: {
    async boot() {
      this.daemon = await NesoiArchitect.daemon(); 
      
      const calendar = await this.daemon.trx('publisher').run(async trx => {
        const publisher = await trx.resource('publisher').create({
          alias: 'Test Publisher',
          uri: 'http://localhost',
        })

        return trx.resource('calendar').create({
          alias: 'Test Calendar',
          description: 'A test calendar',
          publisher_id: publisher.id,
          uri: 'http://localhost/test.osf',
          recover_uri: 'http://instagram'
        })
      })

      await this.daemon.trx('schedule').run(async trx => {
        const eventId = ulid();
        const locationId = ulid();
        await trx.job('event.put').run({
          $: 'event',
          __osf: 'event:1.0',
          id: eventId,
          alias: 'Test Event',
          description: 'A test event',
          calendar_id: calendar.id,
          locations: [
            {
              __osf: 'location:1.0',
              id: ulid(),
              address: {

              },
              name: 'Test Location'
            }
          ],
          schedules: [
            {
              __osf: 'schedule:1.0',
              id: ulid(),
              event_id: eventId,
              locationId: 
            }
          ]
        })
      })

    },
    async run <
      M extends keyof NesoiArchitectSpace['modules'],
      T
    >(module: M, fn: (trx: TrxNode<NesoiArchitectSpace, NesoiArchitectSpace['modules'][M], {}>) => Promise<T>): Promise<T> {
      const status = await this.daemon.trx(module as any).run(fn);
      if (status.state === 'error') {
        throw status.error!;
      }
      return status.output as T;
    }
  }
})

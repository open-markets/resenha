// Utilities
import { defineStore } from 'pinia'
import NesoiArchitect from 'osf-browser/app';
import type NesoiArchitectSpace from 'osf-browser/types/space';
import type { TrxNode } from '@nesoi/for-browser/lib/engine/transaction/trx_node';
import { ulid } from 'ulid';
import { NesoiDatetime } from '@nesoi/for-browser/lib/engine/data/datetime';

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

      console.log(this.daemon);

      await this.daemon.trx('schedule').run(async trx => {
        await trx.job('event.put').run({
          __osf: 'event:1.0',
          alias: 'Test Event',
          description: 'A test event',
          calendar_id: calendar.id,
          locations: [
            {
              __osf: 'location:1.0',
              id: ulid(),
              name: 'Test Location',
              address: {
                __osf: 'address:1.0',
                lat: -22.95352643729582,
                lon: -45.45771881052867,
                country: 'Brasil',
                state: 'São Paulo',
                city: 'Interim do Norte',
                street: 'Rua Goiaba do Alecrim',
                number: '12321',
              },
            }
          ],
          contacts: [
            {
              __osf: 'contact:1.0',
              type: 'social_media',
              value: 'https://instagram.com/hugoaboud'
            }
          ],
          medias: [
            {
              __osf: 'media:1.0',
              type: 'other',
              uri: 'https://myevent.com'
            }
          ],
          schedules: [
            {
              __osf: 'schedule:1.0',
              location_id: 0,
              start_datetime: NesoiDatetime.now().toISO(),
              end_datetime: NesoiDatetime.now().plus('8 hours').toISO(),
            }
          ],
          properties: [
            {
              type: 'service',
              subtype: 'food',
              alias: 'Coxinha',
              description: 'Coxinha de frango com catupiry',
              value: 'R$7,00'
            },
            {
              type: 'structure',
              subtype: 'bathroom',
              alias: 'Banheiro'
            },
            {
              type: 'condition',
              required: true,
              alias: 'Respeita as plantinha',
              description: 'Nada de ficar comendo mato'
            },
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

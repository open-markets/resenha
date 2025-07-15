import { OEF_Calendar } from "../types";

export const MockCalendar: OEF_Calendar = {
  __oef: 'calendar:1.0',

  id: '01K067P8EZ8AAV9K9KN6YFRS1F',
  hash: '',

  title: 'Agenda Falsa',
  description: 'Uma Agenda com Eventos falsos, utilizada no desenvolvimento',

  url: 'https://www.---.com/oef',
  recover_url: 'https://whatsapp.com/?phone=+551291238943',

  owner: {
    name: 'Resenha Corp',
    description: 'O grupo de desenvolvedores da plataforma Resenha'
  },

  events: [
    {
      __oef: 'event:1.0',
      
      id: '01K067P8EYWKB9518K323HGGYZ',
      hash: '',

      title: 'Evento Falso 1',
      description: 'Um Evento falso, utilizado no desenvolvimento. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta nunc sodales mi venenatis suscipit. Nunc aliquam ligula ante, sed eleifend ligula euismod sit amet.',

      locations: {
        '01K068BNCR6G6MYKPAN88R89HP': {
          id: '01K068BNCR6G6MYKPAN88R89HP',
          lat: 12.345,
          lon: -56.789,
          address: {
            country: 'Brasil',
            state: 'PA',
            city: 'Altamira',
            street: 'Rua Jaguara de Ilhéus',
            number: '347',
            extra: 'Fundos',
            reference: 'Ao lado da Verililo'
          },
          place: {
            name: 'Local Falso'
          }
        },
      },
      schedules: [
        {
          start: '2025-07-15T02:00:00-03:00',
          end: '2025-07-15T09:00:00-03:00',
          location: '01K068BNCR6G6MYKPAN88R89HP',
          description: 'Parte 1'
        },
        {
          start: '2025-07-15T14:00:00-03:00',
          end: '2025-07-15T21:00:00-03:00',
          location: '01K068BNCR6G6MYKPAN88R89HP',
          description: 'Parte 2'
        }
      ],

      medias: [
        {
          type: 'image',
          url: 'https://imgs.search.brave.com/y1VCp4iwPD010VtE1Fq4adZCXZzRbNs81hOQuyW99Ns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQ5/MTM0MjAvcHQvZm90/by9nb29zZS1ob25r/aW5nLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1wSGFUaGlZ/ay03YnNmZGE1T1Z0/QVE4UkRoRXhsQnEy/OFRuelZxZHI2X0lZ/PQ'
        },
        {
          type: 'post',
          subtype: 'instagram',
          url: 'https://www.instagram.com/p/DDvK9sXPKb1'
        }
      ],

      properties: {
        service: [
          {
            type: 'service',
            subtype: 'food',
            id: '01K068BNCQJRHDK7BE585AN03H',
            title: 'Suco de Uva',
            description: 'Daqueles de caixinha mesmo, mas é bem bom',
            value: 'R$10'
          },
          {
            type: 'service',
            subtype: 'other',
            id: '01K068BNCQQRHCK7BE585AN03H',
            title: 'Serviço Falso',
            description: 'A gente não faz nada mas finge que fez',
            value: '5 reais por coisa'
          }
        ],
        structure: [
          {
            type: 'structure',
            subtype: 'bathroom',
            id: '01K068BNCQQRHCK7BE585AN03H',
            title: 'Banheiro',
          },
          {
            type: 'structure',
            id: '01K068BNCQQRHCK7BE585AN03H',
            subtype: 'other',
            title: 'Estrutura Falsa',
            description: 'Meio que existe mas não',
            services: ['01K068BNCQQRHCK7BE585AN03H'],
          }
        ],
        condition: [
          {
            type: 'condition',
            id: '01K068JE012HGEZXZTF01XVPYZ',
            required: true,
            title: '1 Kg de Alimento',
            description: 'A entrada só será autorizada a quem trouxer 1kg de alimento, a ser distribuído para as famílias da região.',
          },
          {
            type: 'condition',
            id: '01K068JE012HGFZXZOF01XVPYZ',
            required: false,
            title: 'Traje Social',
            description: 'Recomendamos traje social.',
          }
        ]
      },

      contact: [
        {
          type: 'email',
          value: 'fake@email.com'
        },
        {
          type: 'social_media',
          value: 'https://instagram.com/fake'
        },
      ]
    }
  ]
}
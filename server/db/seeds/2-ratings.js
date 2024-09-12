/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('ratings').insert([
    {
      location_id: 1,
      rating: true,
      timestamp: '2024-09-11T10:35:18.123Z',
      ip_address: '192.168.1.1',
    },
    {
      location_id: 2,
      rating: true,
      timestamp: '2024-09-11T11:00:00.000Z',
      ip_address: '192.168.1.2',
    },
    {
      location_id: 2,
      rating: false,
      timestamp: '2024-09-11T11:00:00.000Z',
      ip_address: '192.168.1.2',
    },
    {
      location_id: 2,
      rating: false,
      timestamp: '2024-09-11T11:00:00.000Z',
      ip_address: '192.168.1.2',
    },
    {
      location_id: 2,
      rating: false,
      timestamp: '2024-09-11T11:00:00.000Z',
      ip_address: '192.168.1.2',
    },
    {
      location_id: 3,
      rating: false,
      timestamp: '2024-09-11T12:15:30.000Z',
      ip_address: '192.168.1.3',
    },
    {
      location_id: 4,
      rating: false,
      timestamp: '2024-09-11T13:30:45.000Z',
      ip_address: '192.168.1.4',
    },
    {
      location_id: 4,
      rating: true,
      timestamp: '2024-09-11T13:30:45.000Z',
      ip_address: '192.168.1.4',
    },
    {
      location_id: 4,
      rating: false,
      timestamp: '2024-09-11T13:30:45.000Z',
      ip_address: '192.168.1.4',
    },
    {
      location_id: 4,
      rating: true,
      timestamp: '2024-09-11T13:30:45.000Z',
      ip_address: '192.168.1.4',
    },
    {
      location_id: 4,
      rating: false,
      timestamp: '2024-09-11T13:30:45.000Z',
      ip_address: '192.168.1.4',
    },
    {
      location_id: 4,
      rating: false,
      timestamp: '2024-09-11T13:30:45.000Z',
      ip_address: '192.168.1.4',
    },

    {
      location_id: 5,
      rating: true,
      timestamp: '2024-09-11T14:45:00.000Z',
      ip_address: '192.168.1.5',
    },
    {
      location_id: 6,
      rating: true,
      timestamp: '2024-09-11T15:10:20.000Z',
      ip_address: '192.168.1.6',
    },
    {
      location_id: 7,
      rating: true,
      timestamp: '2024-09-11T16:25:40.000Z',
      ip_address: '192.168.1.7',
    },
    {
      location_id: 8,
      rating: true,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 8,
      rating: true,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 8,
      rating: false,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 8,
      rating: true,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 8,
      rating: true,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 8,
      rating: false,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 8,
      rating: true,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 8,
      rating: true,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 8,
      rating: true,
      timestamp: '2024-09-11T17:00:00.000Z',
      ip_address: '192.168.1.8',
    },
    {
      location_id: 9,
      rating: true,
      timestamp: '2024-09-11T18:15:30.000Z',
      ip_address: '192.168.1.9',
    },
    {
      location_id: 9,
      rating: true,
      timestamp: '2024-09-11T18:15:30.000Z',
      ip_address: '192.168.1.9',
    },
    {
      location_id: 9,
      rating: false,
      timestamp: '2024-09-11T18:15:30.000Z',
      ip_address: '192.168.1.9',
    },
    {
      location_id: 10,
      rating: false,
      timestamp: '2024-09-11T19:30:00.000Z',
      ip_address: '192.168.1.10',
    },
    {
      location_id: 10,
      rating: true,
      timestamp: '2024-09-11T19:30:00.000Z',
      ip_address: '192.168.1.10',
    },
    {
      location_id: 10,
      rating: true,
      timestamp: '2024-09-11T19:30:00.000Z',
      ip_address: '192.168.1.10',
    },
    {
      location_id: 10,
      rating: false,
      timestamp: '2024-09-11T19:30:00.000Z',
      ip_address: '192.168.1.10',
    },
    {
      location_id: 10,
      rating: true,
      timestamp: '2024-09-11T19:30:00.000Z',
      ip_address: '192.168.1.10',
    },
    {
      location_id: 10,
      rating: false,
      timestamp: '2024-09-11T19:30:00.000Z',
      ip_address: '192.168.1.10',
    },
  ])
}

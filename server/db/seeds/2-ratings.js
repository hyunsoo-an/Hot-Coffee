/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('ratings').insert([
    {
      id: 1,
      location_id: 1,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.1',
    },
    {
      id: 2,
      location_id: 2,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.2',
    },
    {
      id: 3,
      location_id: 3,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.3',
    },
    {
      id: 4,
      location_id: 4,
      rating: false,
      timestamp: '',
      ip_address: '192.168.1.4',
    },
    {
      id: 5,
      location_id: 5,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.5',
    },
    {
      id: 6,
      location_id: 6,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.6',
    },
    {
      id: 7,
      location_id: 7,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.7',
    },
    {
      id: 8,
      location_id: 8,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.8',
    },
    {
      id: 9,
      location_id: 9,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.9',
    },
    {
      id: 10,
      location_id: 10,
      rating: true,
      timestamp: '',
      ip_address: '192.168.1.10',
    },
  ])
}

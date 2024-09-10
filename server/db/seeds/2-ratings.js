/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('ratings').insert([
    {
      id: 1,
      location_id: 1,
      rating: '',
      timestamp: '',
      ip_address: '',
    },
    {
      id: 2,
      location_id: 2,
      rating: '',
      timestamp: '',
      ip_address: '',
    },
    {
      id: 3,
      location_id: 3,
      rating: '',
      timestamp: '',
      ip_address: '',
    },
  ])
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('cafes').insert([
    {
      id: 1,
      name: '',
      longitude: '',
      latitude: '',
      image: '',
      google_id: '',
      directions_url: '',
      street_address: '',
      suburb: '',
      city: '',
    },
    {
      id: 2,
      name: '',
      longitude: '',
      latitude: '',
      image: '',
      google_id: '',
      directions_url: '',
      street_address: '',
      suburb: '',
      city: '',
    },
    {
      id: 3,
      name: '',
      longitude: '',
      latitude: '',
      image: '',
      google_id: '',
      directions_url: '',
      street_address: '',
      suburb: '',
      city: '',
    },
  ])
}

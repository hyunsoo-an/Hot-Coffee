/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('establishments', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.number('longitude')
    table.number('latitude')
    table.string('image')
    table.string('google_id')
    table.string('directions_url')
    table.string('street_address')
    table.string('suburb')
    table.string('city')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('establishments')
}

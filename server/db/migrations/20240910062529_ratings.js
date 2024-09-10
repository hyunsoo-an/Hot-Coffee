/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments('id').primary()
    table.number('location_id')
    table.boolean('rating')
    table.timestamp('timestamp')
    table.number('ip_address')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('ratings')
}

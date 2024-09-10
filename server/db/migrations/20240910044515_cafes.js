/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('cafes', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.float('longitude')
    table.float('latitude')
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
export function down(knex) {
  return knex.schema.dropTable('cafes')
}

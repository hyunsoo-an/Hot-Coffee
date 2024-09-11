/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments('id').primary()
    table.integer('location_id').references('cafes.id')
    table.boolean('rating')
    table.timestamp('timestamp')
    table.string('ip_address')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('ratings')
}

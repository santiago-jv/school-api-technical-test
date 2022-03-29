/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('students', (table) => {
        table.increments('id').unsigned()
        table.string('name').notNullable()
        table.integer('school_id').unsigned().notNullable()
        table.foreign('school_id').references('schools.id')
        table.timestamp('created_at').defaultTo(knex.fn.now())

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('students')

};

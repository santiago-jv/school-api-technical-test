/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('courses', (table) => {
        table.increments('id').unsigned()
        table.string('classroom').notNullable()
        table.integer('grade').notNullable().unsigned()
        table.integer('school_id').unsigned().notNullable()
        table.foreign('school_id').references('schools.id')
        table.timestamp('created_at').defaultTo(knex.fn.now())

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('courses')
};

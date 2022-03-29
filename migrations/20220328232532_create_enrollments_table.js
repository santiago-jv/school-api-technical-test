/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('enrollments', (table) => {
        table.increments('id').unsigned()
        table.integer('student_id').unsigned().notNullable()
        table.foreign('student_id').references('students.id')
        table.integer('subject_id').unsigned().notNullable()
        table.foreign('subject_id').references('subjects.id').onDelete('CASCADE').onUpdate('CASCADE')
        table.timestamp('created_at').defaultTo(knex.fn.now())

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('enrollments')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('subjects', (table) => {
        table.increments('id').unsigned()
        table.string('name').notNullable()
        table.integer('course_id').unsigned().notNullable()
        table.foreign('course_id').references('courses.id').onUpdate('CASCADE')
        table.integer('teacher_id').unsigned()
        table.foreign('teacher_id').references('teachers.id').onUpdate('CASCADE')
        table.timestamp('created_at').defaultTo(knex.fn.now())

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('subjects')
};

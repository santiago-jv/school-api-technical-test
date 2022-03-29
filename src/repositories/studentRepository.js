const knex = require('../database/connection').getClient()
const StudentRepository = {}

StudentRepository.createStudent = ({name,schoolId}) => {
    return knex('students').insert({name,school_id:schoolId})
}


StudentRepository.verifyIfExists = (studentId) => {
    return knex('students').select('students.id').where({id: studentId})
}
module.exports = StudentRepository
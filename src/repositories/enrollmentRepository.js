const knex = require('../database/connection').getClient()
const EnrollmentRepository = {}

EnrollmentRepository.createEnrollment = (subjectId,studentId)=> {
    return knex('enrollments').insert({subject_id:subjectId, student_id:studentId})
}



module.exports = EnrollmentRepository
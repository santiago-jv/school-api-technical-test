const knex = require('../database/connection').getClient()
const EnrollmentRepository = {}

EnrollmentRepository.createEnrollment = (subjectId,studentId)=> {
    return knex('enrollments').insert({subject_id:subjectId, student_id:studentId})
}
EnrollmentRepository.getStudentsBySubjectId = (subjectId)=> {
    return knex('enrollments')
    .select(['students.name', 'students.id', 'students.created_at as createdAt', 'students.school_id as schoolId'])
    .join('students','students.id' ,'=','enrollments.student_id')
    .where('enrollments.subject_id', '=', subjectId)
}


module.exports = EnrollmentRepository
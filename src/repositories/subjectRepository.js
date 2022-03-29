const knex = require('../database/connection').getClient()
const SubjectRepository = {}

SubjectRepository.createSubject = ({
    name,
    courseId
}) => {
    return knex('subjects').insert({name,course_id:courseId})
}
SubjectRepository.assignTeacher = (subjectId,teacherId) => {
    return knex('subjects').where({id:subjectId}).update({teacher_id:teacherId})
}
SubjectRepository.verifyIfExists = (subjectId) => {
    return knex('subjects').select('subjects.id').where({id: subjectId})
}



SubjectRepository.getSubjects = async () => {
    return knex('subjects')
  /*   .select([
        'subjects.id as subjectId','subjects.name as subjectName','subjects.created_at as subjectCreatedAt',
        'courses.id as courseId','courses.classroom','courses.grade','courses.created_at as courseCreatedAt',
        'students.name as studentName','students.id as studentId'
    ])

    .join('courses','courses.id' ,'=', 'subjects.course_id')
    .join('enrollments', 'enrollments.subject_id','=','subjects.id')
    .join('students','students.id','=','enrollments.student_id') */

}


SubjectRepository.getBooksByUserId = (userId) => {
    return knex('books').where({user_id:userId})
}

SubjectRepository.updateSubject = ({
    name,
    subjectId,
    courseId,
    teacherId,
}) => {
    return knex('subjects').where({id:subjectId}).update({name,course_id:courseId, teacher_id:teacherId})
}

SubjectRepository.deleteSubject = (subjectId) => {
    return knex('subjects').where({id:subjectId}).del()
}

module.exports = SubjectRepository
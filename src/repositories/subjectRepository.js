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
    .select([
        'subjects.id as subjectId','subjects.name as subjectName','subjects.created_at as subjectCreatedAt',
        'courses.id as courseId','courses.classroom','courses.grade','courses.created_at as courseCreatedAt',
        'teachers.name as teacherName','teachers.id as teacherId','teachers.created_at as teacherCreatedAt','teachers.school_id  as teacherSchoolId'
        
    ])
    .join('courses','courses.id' ,'=', 'subjects.course_id')
    .join('teachers', 'teachers.id','=', 'subjects.teacher_id')

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

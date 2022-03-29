const knex = require('../database/connection').getClient()
const TeacherRepository = {}

TeacherRepository.createTeacher = ({
    schoolId,
    name
}) => {
    return knex('teachers').insert({name,school_id:schoolId})
}

TeacherRepository.verifyIfExists = (teacherId) => {
    return knex('teachers').select('teachers.id').where({id: teacherId})
}
module.exports = TeacherRepository
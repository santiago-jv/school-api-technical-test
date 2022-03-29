const knex = require('../database/connection').getClient()
const CourseRepository = {}

CourseRepository.createCourse = ({
    schoolId,
    classroom,
    grade
}) => {
    return knex('courses').insert({classroom,grade,school_id:schoolId})
}
CourseRepository.verifyIfExists = (courseId) => {
    return knex('courses').select('courses.id').where({id: courseId})
}


module.exports = CourseRepository
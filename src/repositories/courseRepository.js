const Course = require('../models/Course')

const knex = require('../database/connection').getClient()
const CourseRepository = {}

CourseRepository.createCourse = ({
    schoolId,
    classroom,
    grade
}) => {

    return Course.query().insertAndFetch({
        school_id:schoolId,
        classroom,
        grade
    })

}
CourseRepository.verifyIfExists = (courseId) => {
    return knex('courses').select('courses.id').where({id: courseId})
}


module.exports = CourseRepository
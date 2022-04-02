const Course = require('../models/Course')
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
   return Course.query().findById(courseId)
}


module.exports = CourseRepository
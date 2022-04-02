const Teacher = require('../models/Teacher')
const TeacherRepository = {}

TeacherRepository.createTeacher = ({
    schoolId,
    name
}) => {
   return Teacher.query().insertAndFetch({
       name,
       school_id:schoolId
   })
}

TeacherRepository.verifyIfExists = (teacherId) => {
    return Teacher.query().findById(teacherId)
}
module.exports = TeacherRepository
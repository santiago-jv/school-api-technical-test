const Student = require('../models/Student')
const StudentRepository = {}

StudentRepository.createStudent = ({name,schoolId}) => {
    return Student.query().insertAndFetch({
        name,
        school_id:schoolId
    })
}


StudentRepository.verifyIfExists = (studentId) => {
    return Student.query().findById(studentId)
}
module.exports = StudentRepository
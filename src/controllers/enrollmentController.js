
const EnrollmentRepository = require("../repositories/enrollmentRepository")
const StudentRepository = require("../repositories/studentRepository")
const SubjectRepository = require("../repositories/subjectRepository")

const EnrollmentController = {}

EnrollmentController.createEnrollment = async (request, response) => {
    const {subjectId, studentId} = request.params
    try {
        const [subjectExist] = await SubjectRepository.verifyIfExists(subjectId)
        const [studentExist] = await StudentRepository.verifyIfExists(studentId)

        if(!subjectExist) return response.status(400).json({ error: "Subject not found"})
        else if (!studentExist) return response.status(400).json({ error: "Student not found"})

        await EnrollmentRepository.createEnrollment(subjectId, studentId)
        return response.status(200).json({
            message:'Student assigned successfully'
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}


module.exports = EnrollmentController
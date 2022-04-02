const SchoolRepository = require("../repositories/schoolRepository")
const StudentRepository = require("../repositories/studentRepository")

const StudentController = {}

StudentController.createStudent = async (request,response) => {
    const {schoolId, name} = request.body
    try {

        const school= await SchoolRepository.verifyIfExists(schoolId)
    
        if(!school) return response.status(400).json({ error: "School not found"})

        const  student = await StudentRepository.createStudent({name, schoolId})
        return response.status(201).json({
            message:'Student created successfully',
            student
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}


module.exports = StudentController
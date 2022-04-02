const SchoolRepository = require("../repositories/schoolRepository")
const TeacherRepository = require("../repositories/teacherRepository")

const TeacherController = {}

TeacherController.createTeacher = async (request,response) => {
    const {schoolId, name} = request.body
    try {
        
        const school = await SchoolRepository.verifyIfExists(schoolId)
    
        if(!school) return response.status(400).json({ error: "School not found"})

        const  teacher = await TeacherRepository.createTeacher({name, schoolId})
        return response.status(201).json({
            message:'Teacher created successfully',
            teacher
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}


module.exports = TeacherController
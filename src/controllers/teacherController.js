const SchoolRepository = require("../repositories/schoolRepository")
const TeacherRepository = require("../repositories/teacherRepository")

const TeacherController = {}

TeacherController.createTeacher = async (request,response) => {
    const {schoolId, name} = request.body
    try {
        
        const [schoolExist] = await SchoolRepository.verifyIfExists(schoolId)
    
        if(!schoolExist) return response.status(400).json({ error: "School not found"})

        const  [teacherId] = await TeacherRepository.createTeacher({name, schoolId})
        return response.status(201).json({
            message:'Teacher created successfully',
            teacherId
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
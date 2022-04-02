const CourseRepository = require("../repositories/courseRepository")
const SchoolRepository = require("../repositories/schoolRepository")

const CourseController = {}

CourseController.createCourse = async (request,response) => {
    const {schoolId, classroom, grade} = request.body
    try {
        
        const school = await SchoolRepository.verifyIfExists(schoolId)

        if(!school) return response.status(400).json({ error: "School not found"})

        const  course = await CourseRepository.createCourse({schoolId,classroom, grade})
        return response.status(201).json({
            message:'Course created successfully',
            course
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}


module.exports = CourseController
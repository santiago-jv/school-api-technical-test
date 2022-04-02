const CourseRepository = require("../repositories/courseRepository")
const SubjectRepository = require("../repositories/subjectRepository")
const TeacherRepository = require("../repositories/teacherRepository")

const SubjectController = {}

SubjectController.getSubjects = async (request, response) => {
    try {
        const subjects = await SubjectRepository.getSubjects()

        return response.status(200).json(subjects)
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}

SubjectController.createSubject = async (request,response) => {
    const {name, courseId} = request.body
    try {
        const course = await CourseRepository.verifyIfExists(courseId)
    
        if(!course) return response.status(400).json({ error: "Course not found"})
        const subject = await SubjectRepository.createSubject({name, courseId})
        return response.status(201).json({
            message:'Subject created successfully',
            subject
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}
SubjectController.assignTeacher = async (request, response) => {
    const {subjectId, teacherId} = request.params
    try {
        const subject = await SubjectRepository.verifyIfExists(subjectId)
        const teacher = await TeacherRepository.verifyIfExists(teacherId)

        if(!subject) return response.status(400).json({ error: "Subject not found"})
        else if (!teacher) return response.status(400).json({ error: "Teacher not found"})

        await SubjectRepository.assignTeacher(subjectId, teacherId)
        return response.status(200).json({
            message:'Teacher assigned successfully'
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}


SubjectController.updateSubject = async (request, response) => {
    const {subjectId} = request.params
    const {name, courseId, teacherId} = request.body
    try {
        const subject = await SubjectRepository.verifyIfExists(subjectId)
        if(!subject) return response.status(400).json({ error: "Subject not found"})

        const course = await CourseRepository.verifyIfExists(courseId)
        const teacher = await TeacherRepository.verifyIfExists(teacherId)
        
        if(!course) return response.status(400).json({ error: "Course not found"})
        else if (!teacher) return response.status(400).json({ error: "Teacher not found"})
        await SubjectRepository.updateSubject({name,subjectId, courseId, teacherId})

        return response.status(200).json({ 
            message: 'Subject updated successfully'
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}
SubjectController.deleteSubject = async (request, response) => {
    const {subjectId} = request.params
    try {
        await SubjectRepository.deleteSubject(subjectId)

        return response.status(200).json({ 
            message: 'Subject deleted successfully'
        })
    } catch (error) {
        console.error(error)
        return response.status(500).json({
            message: 'Internal Server Error',
            error
        })
    }
}

module.exports = SubjectController
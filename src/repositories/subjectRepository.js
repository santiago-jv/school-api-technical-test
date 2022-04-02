const Subject = require('../models/Subject')
const SubjectRepository = {}

SubjectRepository.createSubject = ({
    name,
    courseId
}) => {
    return Subject.query().insertAndFetch({name,course_id:courseId})
}
SubjectRepository.assignTeacher = (subjectId,teacherId) => {
    return Subject.query().patchAndFetchById(subjectId,{teacher_id:teacherId})
}
SubjectRepository.verifyIfExists = (subjectId) => {
    return Subject.query().findById(subjectId)

}

SubjectRepository.getSubjects = async () => {
   return Subject.query()
   .select('subjects.name', 'subjects.id', 'subjects.created_at')
   .withGraphFetched('teacher')
   .withGraphFetched('students')
   .withGraphFetched('course')
}
SubjectRepository.updateSubject = ({
    name,
    subjectId,
    courseId,
    teacherId,
}) => {
    return Subject.query().updateAndFetchById(subjectId,{
        name,
        course_id:courseId,
        teacher_id:teacherId
    })
}

SubjectRepository.deleteSubject = (subjectId) => {
    return Subject.query().deleteById(subjectId)
}

module.exports = SubjectRepository

const {Router} = require('express');
const SubjectController = require('../controllers/subjectController');
const subjectRouter = Router();

subjectRouter.get('/', SubjectController.getSubjects);
subjectRouter.post('/', SubjectController.createSubject)
subjectRouter.put('/:subjectId', SubjectController.updateSubject)

subjectRouter.delete('/:subjectId', SubjectController.deleteSubject)

subjectRouter.patch('/:subjectId/assign-teacher/:teacherId', SubjectController.assignTeacher)

module.exports = subjectRouter;
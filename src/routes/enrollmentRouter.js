const {Router} = require('express');
const EnrollmentController = require('../controllers/enrollmentController');
const enrollmentRouter = Router();

enrollmentRouter.post('/subject/:subjectId/student/:studentId', EnrollmentController.createEnrollment)

module.exports = enrollmentRouter;
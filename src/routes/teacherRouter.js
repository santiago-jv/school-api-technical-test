const {Router} = require('express');
const TeacherController = require('../controllers/teacherController');
const teacherRouter = Router();

teacherRouter.post('/', TeacherController.createTeacher)

module.exports = teacherRouter;
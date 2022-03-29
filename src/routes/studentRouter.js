const {Router} = require('express');
const StudentController = require('../controllers/studentController');
const studentRouter = Router();

studentRouter.post('/', StudentController.createStudent)

module.exports = studentRouter;
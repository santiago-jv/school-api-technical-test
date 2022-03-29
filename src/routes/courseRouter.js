const {Router} = require('express');
const CourseController = require('../controllers/courseController');
const courseRouter = Router();

courseRouter.post('/', CourseController.createCourse)

module.exports = courseRouter;
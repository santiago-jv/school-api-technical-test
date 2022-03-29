const {Router} = require('express');
const SchoolController = require('../controllers/schoolController');
const schoolRouter = Router();

schoolRouter.post('/', SchoolController.createSchool)

module.exports = schoolRouter;
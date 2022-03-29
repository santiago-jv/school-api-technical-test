const {Router} = require('express');
const courseRouter = require('./courseRouter');
const enrollmentRouter = require('./enrollmentRouter');
const schoolRouter = require('./schoolRouter');
const studentRouter = require('./studentRouter');
const subjectRouter = require('./subjectRouter');
const teacherRouter = require('./teacherRouter');
const indexRouter = Router();

indexRouter.use('/schools', schoolRouter);
indexRouter.use('/courses', courseRouter);
indexRouter.use('/students', studentRouter);
indexRouter.use('/teachers', teacherRouter);
indexRouter.use('/subjects', subjectRouter);
indexRouter.use('/enrollments', enrollmentRouter);

module.exports = indexRouter;
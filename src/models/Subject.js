const { Model } = require("objection");
class Subject extends Model {

    static get tableName() {
        return 'subjects';
    }

    static get relationMappings() {
        const Course = require("./Course");
        const Student = require("./Student");
        const Teacher = require("./Teacher");

        return {
            students: {
                relation: Model.ManyToManyRelation,
                modelClass: Student,
                join: {
                    from: 'subjects.id',
                    through: {
                        from: 'enrollments.subject_id',
                        to: 'enrollments.student_id'
                    },
                    to: 'students.id'
                }
            },
            teacher: {
                relation: Model.BelongsToOneRelation,
                modelClass: Teacher,
                join: {
                    from: 'subjects.teacher_id',
                    to: 'teachers.id'
                }
            },
            course: {
                relation: Model.BelongsToOneRelation,
                modelClass: Course,
                join: {
                    from: 'subjects.course_id',
                    to: 'courses.id'
                }
            }
        }
    }
}



module.exports = Subject;
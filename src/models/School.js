const { Model } = require("objection");
class School extends Model {
    static get tableName () {
        return 'schools';
    }
    static get relationMappings() {
        const Course = require("./Course");
        const Student = require("./Student");
        const Teacher = require("./Teacher");

        return  {
           courses: {
                    relation: Model.HasManyRelation,
                    modelClass:Course,
                    join:{
                        from:'schools.id',
                        to:'courses.school_id'
                    }
            },
            students: {
                relation:Model.HasManyRelation,
                modelClass:Student,
                join:{
                    from:'schools.id',
                    to:'students.school_id'
                }
            },
            teachers: {
                    relation:Model.HasManyRelation,
                    modelClass:Teacher,
                    join:{
                        from:'schools.id',
                        to:'teachers.school_id'
                    }
            }
        }
    }
}



module.exports = School;
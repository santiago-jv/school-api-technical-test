const { Model } = require("objection");
const Subject = require("./Subject");

class Course extends Model {

    static get tableName () {
        return 'courses';
    }
    static get relationMappings() {
        return  {
           subjects:{
               relation:Model.HasManyRelation,
               modelClass:Subject,
               join: {
                   from:'courses.id',
                   to:'subjects.course_id'
               }
           }
        }
    }
}



module.exports = Course;
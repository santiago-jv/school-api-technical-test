const { Model } = require("objection");

class Course extends Model {
    
    static get tableName () {
        return 'courses';
    }
    static get relationMappings() {
        const Subject = require("./Subject");
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
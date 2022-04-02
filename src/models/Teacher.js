const { Model } = require("objection");

class Teacher extends Model {

    static get tableName () {
        return 'teachers';
    }
    static get relationMappings() {
        const Subject = require("./Subject");
        
        return  {
            subjects:{
                relation:Model.HasManyRelation,
                modelClass:Subject,
                join:{
                    from:'teachers.id',
                    to:'subjects.teacher_id'                    
                } 
            }
        }
    }
}



module.exports = Teacher;
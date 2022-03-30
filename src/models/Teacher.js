const { Model } = require("objection");

class Teacher extends Model {

    static get tableName () {
        return 'teachers';
    }
    static get relationMappings() {
        return  {
           
        }
    }
}



module.exports = Teacher;
const { Model } = require("objection");

class Student extends Model {

    static get tableName () {
        return 'students';
    }
    static get relationMappings() {
        return  {
           
        }
    }
}



module.exports = Student;
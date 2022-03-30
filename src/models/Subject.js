const { Model } = require("objection");

class Subject extends Model {

    static get tableName () {
        return 'subjects';
    }
    static get relationMappings() {
        return  {
           
        }
    }
}



module.exports = Subject;
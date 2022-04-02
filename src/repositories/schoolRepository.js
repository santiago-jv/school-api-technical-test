const School = require('../models/School')
const SchoolRepository = {}

SchoolRepository.createSchool = (name) => {
    return School.query().insertAndFetch({name})
}
SchoolRepository.verifyIfExists = (schoolId) => {
   return School.query().findById(schoolId);
}


module.exports = SchoolRepository
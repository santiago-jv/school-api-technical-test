const School = require('../models/School')

const knex = require('../database/connection').getClient()
const SchoolRepository = {}

SchoolRepository.createSchool = (name) => {
    return School.query().insertAndFetch({name})
}
SchoolRepository.verifyIfExists = (schoolId) => {
    return knex('schools').select('schools.id').where({id: schoolId})
}


module.exports = SchoolRepository
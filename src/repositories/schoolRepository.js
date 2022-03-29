const knex = require('../database/connection').getClient()
const SchoolRepository = {}

SchoolRepository.createSchool = (name) => {
    return knex('schools').insert({name})
}
SchoolRepository.verifyIfExists = (schoolId) => {
    return knex('schools').select('schools.id').where({id: schoolId})
}


module.exports = SchoolRepository
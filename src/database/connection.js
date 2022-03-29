require('dotenv').config()
const knex = require('knex')
const {
    DATABASE_HOST,
    DATABASE_PORT, 
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD
} = process.env

const connectionSettings = {
    client: 'mysql',
    connection: {
        host: DATABASE_HOST,
        port: DATABASE_PORT, 
        database: DATABASE_NAME,
        user: DATABASE_USER,
        password: DATABASE_PASSWORD
    }
}

let knexClient = null

module.exports.connect = function () {
    if (!knexClient) {
        knexClient = knex(connectionSettings)
    }
    return knexClient
}
/**
 * @returns { import("knex").Knex }
 */
module.exports.getClient = function () {
    if (!knexClient) {
        
        return this.connect()
    }

    return knexClient
}
require('dotenv').config()
module.exports = {

  client: 'mysql',
  connection: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
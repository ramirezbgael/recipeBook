//? Importing Sequelize for the database connection
const { Sequelize } = require("sequelize");

//? Environment variables
const config = require('../config')

//? Connecting a new database 
const db = new Sequelize({
  dialect: 'postgres',
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
  database: config.db.dbName
})

//? Exports the db object to use it in the models
module.exports = db
//? Dependencies
require('dotenv').config()

//* This object that contains all the variables from .env
const config = {
  port: process.env.PORT || 9000,
  nodeEnv: process.env.NODE_ENV ||'development', //? Development, Testing, Production
  db: {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'root',
    dbName: process.env.DB_NAME
  },
  jwt:{
    key: process.env.JWT_KEY
  }
}

module.exports = config
//? Dependencies
const express = require('express')
const authRouter = require('./auth/auth.router')
const usersRouter = require('./users/users.router')

//? Environment variables 
const {port} = require('./config')
console.log(port)

//? Initial configs
const app = express()

//* Enables the use of .json as objects
app.use(express.json())

//* Shows the available routes in the API
app.get('/', (req, res) => {
  res.status(200).json({
    users: `localhost:${port}/api/v1/users`
  })
})

//? Importing the models initialization
const initModels = require('./models/initModels')

//? Importing the database
const db = require('./utils/database')

//? Authentication of the login into the database
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err))

//? Synchronization of the database
db.sync()
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.log(err))
  //? Calling the initModels function
  initModels()

//! App connection with the router
app.use('/api/v1/users/', usersRouter)
app.use('/api/v1/auth/', authRouter)

//* App listening
app.listen(port, ()=>{
  console.log(`Server started at port ${port}`)
})
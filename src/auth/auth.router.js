//? auth va a contener las rutas de autorixacion y autenticacion


//? login
//? register
//? recovery password
//? verify user
const authServices = require('./auth.services')
const { postUser } = require('../users/users.services')
const router = require('express').Router()

router.post('/register', postUser)
router.post('/login', authServices.login)

module.exports = router
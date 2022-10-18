const router = require('express').Router()
const passport = require('passport')

const usersServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)



//? Route /
router.route('/')
  .get(
  passport.authenticate('jwt', {session: false}), 
  usersServices.getAllUsers
  )

//? Route /ME
router.route('/me')
  .get(
    passport.authenticate('jwt', {session: false}),
    usersServices.getMyUser
  )
  .patch(
    passport.authenticate('jwt', {session: false}),
    usersServices.patchMyUser
  )
  .delete(
    passport.authenticate('jwt', {session: false}),
    usersServices.deleteMyUser
  )

//? Route /:id
router.route('/:id')
  .get(usersServices.getOneUser)
  .put(usersServices.putUser)
  .patch(usersServices.patchUser)
  .delete(usersServices.deleteUser)


module.exports = router
const router = require('express').Router()
const passport = require('passport')

const adminValidate = require('../middlewares/role.middleware')
const usersServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)



//? Route /
router.route('/')
  .get(
    usersServices.getAllUsers
  )
  .post(
    passport.authenticate('jwt', {session: false}),
    usersServices.postUser
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
  .get(
    usersServices.getOneUser
  )
  .put(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    usersServices.putUser
  )
  .patch(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    usersServices.patchUser
  )
  .delete(
    passport.authenticate('jwt', {session: false}),
    adminValidate,
    usersServices.deleteUser
  )


module.exports = router
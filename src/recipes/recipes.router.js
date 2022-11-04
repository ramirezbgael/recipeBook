const router = require('express').Router()
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)

const services = require('./recipes.services')

router.route('/')
  .get(services.getAll)
  .post(
    passport.authenticate('jwt', {session: false}),
    services.post
  )

router.route('/:recipe_id')
  .get(services.getByID)
  .patch(
    passport.authenticate('jwt', {session: false}),
    services.patchByID
  )
  .delete(
    passport.authenticate('jwt', {session: false}),
    services.deleteByID
  )

module.exports = router
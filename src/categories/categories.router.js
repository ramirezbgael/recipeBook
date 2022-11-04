const router = require('express').Router()
const services = require('./categories.services')

router.route('/')
  .get(services.getAll)
  .post(services.post) //! NEEDS ADMIN PROTECTION

router.route('/:id')
  .get(services.getByID)
  .delete(services.deleteByID) //! NEEDS ADMIN PROTECTION

module.exports = router
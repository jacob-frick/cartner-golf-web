const router = require('express').Router()

router.use('/api', require('./authorize.js'))
router.use('/api', require('./user.js'))

module.exports = router
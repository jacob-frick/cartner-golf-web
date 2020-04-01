const router = require('express').Router()

router.use('/api', require('./authorize.js'))
router.use('/api/users', require('./user.js'))
router.use('/api/friends', require('./friends.js'))
module.exports = router
const router = require('express').Router()

router.use('/', require('./authorize.js'))
router.use('/users', require('./user.js'))
router.use('/friends', require('./friends.js'))
router.use('/courses', require('./courses.js'))
module.exports = router
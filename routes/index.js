const router = require('express').Router()

router.use('/', require('./authorize.js'))
router.use('/users', require('./user.js'))
router.use('/friends', require('./friends.js'))
router.use('/courses', require('./courses.js'))
router.use('/rounds', require('./rounds.js'))
router.use('/test', require('./test.js'))
module.exports = router
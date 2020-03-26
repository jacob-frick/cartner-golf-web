const router = require('express').Router()

router.use('/api', require('./user.js'))
router.get('/dashboard', (req,res) => {res.end()})
module.exports = router
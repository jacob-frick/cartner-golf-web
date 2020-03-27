const router = require('express').Router()
//bring in passport to lock routes
const passport = require('passport')
const { User } = require('../models')
//bring in jwt to return if the user sucessfully logs in
const jwt = require('jsonwebtoken')
router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req,res) => {
    res.redirect('/')
})
router.use('/api', require('./user.js'))

module.exports = router
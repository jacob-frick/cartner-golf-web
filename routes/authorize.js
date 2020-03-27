const express = require('express')
const router = express.Router()
const {User} = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.get('/authorize', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.sendStatus(200)
})

module.exports = router
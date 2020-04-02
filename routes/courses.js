const express = require('express')
const router = express.Router()
const { Course } = require('../models')
const passport = require('passport')

router.get('/all', passport.authenticate('jwt', {session: false}), (req, res) => {
    Course.find({}, (err, courses) => {
        res.json(courses)
    })
})
module.exports = router
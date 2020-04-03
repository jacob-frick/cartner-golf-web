const express = require('express')
const router = express.Router()
const { Course } = require('../models')
const passport = require('passport')

router.get('/all', passport.authenticate('jwt', {session: false}), (req, res) => {
    Course.find({}, (err, courses) => {
        res.json(courses)
    })
})
router.get('/id/:uid', passport.authenticate('jwt', {session: false}), (req, res) => {
    Course.findById(req.params.uid)
    .then(course => {
        res.json(course)
    })
    .catch(e => {
        console.log('here')
        res.json({message: "This course does not exist"})
    })
})
router.get('/name/:name', passport.authenticate('jwt', {session: false}), (req, res) => {
    Course.find({name: req.params.name}, (err, course) => {
        res.json(course)
    })
})
module.exports = router
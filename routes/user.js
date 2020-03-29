const express = require('express')
const router = express.Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/users/register', (req, res) => {
    let { fname, lname, username, password } = req.body
    User.findOne({ username })
        .then(user => {
            if (user) {
                res.sendStatus(400)
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) console.log('error')
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) throw err
                        User.create({ fname, lname, username, password: hash })
                            .then(user => {
                                token = jwt.sign({ id: user._id }, process.env.SECRET)
                                res.json({ id: user._id, token })
                            })
                    })
                })
            }
        })
})

router.post('/users/login', (req, res, next) => {
    passport.authenticate('local', {}, (err, user, message) => {
        if (message) res.json(message)
        else {
            token = jwt.sign({ id: user._id }, process.env.SECRET)
            res.json({ id: user._id, token })
        }
    })(req, res, next)
})

module.exports = router
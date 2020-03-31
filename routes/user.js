const express = require('express')
const router = express.Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose');

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

router.get('/users/username/:uname', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOne({ username: req.params.uname })
        .then((user) => {
            if (!user) {
                res.json({
                    message: 'No User Found'
                })
            } else if (req.user._id.toString() === user._id.toString()) {
                res.json({
                    message: 'Trying to find yourself? Then go golf!'
                })
            } else {
                res.json({
                    username: user.username
                })
            }
        })
})
router.post('/users/send/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById(req.params.uid)
    .then(user => {
        if (req.user._id.toString() === user._id.toString()) {
            res.json({message: 'Unable to send request to self.'})
        } else {
            user.rec_friend_requests.push(req.user._id)
            user.save()
            req.user.sent_friend_requests.push(req.params.uid)
            req.user.save()
            res.sendStatus(200)
        }
    })
    .catch(e => {
        res.json(e)
    })
})

router.post('/users/respond/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {

})
module.exports = router
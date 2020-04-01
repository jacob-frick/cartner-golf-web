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
            req.user.sent_friend_requests.forEach(element => {
                if (user._id.toString() === element.toString()) {
                    res.json({ message: 'Already sent a request' })
                }
            })
            req.user.friends.forEach(element => {
                if (user._id.toString() === element.toString()) {
                    res.json({ message: 'This person is already your friend' })
                }
            })
            req.user.rec_friend_requests.forEach(element => {
                if (user._id.toString() === element.toString()) {
                    res.json({ message: 'This person already sent you a friend request' })
                }
            })
            if (!user) {
                res.json({ message: 'No User Found'})
            } else if (req.user._id.toString() === user._id.toString()) {
                res.json({ message: 'Trying to find yourself? Then go golf!' })
            } else {
                res.json({
                    fname: user.fname,
                    lname: user.lname,
                    id: user._id,
                    username: user.username
                })
            }
        })
})
router.get('/users/send/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById(req.params.uid)
        .then(user => {
            if (req.user._id.toString() === user._id.toString()) {
                res.json({ message: 'Unable to send request to self.' })
            } else {
                user.rec_friend_requests.push(req.user._id)
                user.save()
                req.user.sent_friend_requests.push(req.params.uid)
                req.user.save()
                res.json({message: 'SENT'})
            }
        })
        .catch(e => {
            res.json({ message: 'INVAILD_ID' })
        })
})

router.post('/users/respond/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {

})

router.get('/users/sent-requests', passport.authenticate('jwt', { session: false }), (req,res) => {
    res.json({sent_requests: req.user.sent_friend_requests})
})
router.get('/users/rec-requests', passport.authenticate('jwt', { session: false }), (req,res) => {
    res.json({rec_requests: req.user.rec_friend_requests})
})
router.get('/users/friends', passport.authenticate('jwt', { session: false }), (req,res) => {
    res.json({friends: req.user.friends})
})

module.exports = router
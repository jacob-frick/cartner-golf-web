const express = require('express')
const router = express.Router()
const { User } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/register', (req, res) => {
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

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {}, (err, user, message) => {
        if (message) res.json(message)
        else {
            token = jwt.sign({ id: user._id }, process.env.SECRET)
            res.json({ id: user._id, token })
        }
    })(req, res, next)
})

router.get('/username/:uname', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findOne({ username: req.params.uname })
        .then((user) => {
            let alreadySent = false
            req.user.sent_friend_requests.forEach(element => {
                if (user._id.toString() === element.toString()) {
                    alreadySent = true
                }
            })
            let alreadyFriend = false
            req.user.friends.forEach(element => {
                if (user._id.toString() === element.toString()) {
                    alreadyFriend = true
                }
            })
            let alreadyRec = false
            req.user.rec_friend_requests.forEach(element => {
                if (user._id.toString() === element.toString()) {
                    alreadyRec = true
                }
            })
            if (!user) {
                res.json({ message: 'No User Found' })
            } else if (req.user._id.toString() === user._id.toString()) {
                res.json({ message: 'Trying to find yourself? Then go golf!' })
            } else if (alreadySent) {
                res.json({ message: 'Already sent a request' })
            } else if (alreadyRec) {
                res.json({ message: 'This person already sent you a friend request' })
            } else if (alredyFriend) {
                res.json({ message: 'This person is already your friend' })
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


module.exports = router
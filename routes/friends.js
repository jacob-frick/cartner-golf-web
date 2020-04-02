const express = require('express')
const router = express.Router()
const { User } = require('../models')
const passport = require('passport')


router.post('/send/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {
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
    User.findById(req.user._id).populate({path: 'sent_friend_requests', select: ['fname', 'lname', 'username']})
    .then( user => {
        res.json(user.sent_friend_requests)
    })
    .catch(e => {
        console.error(e)
        res.sendStatus(400)
    })
})
router.get('/users/rec-requests', passport.authenticate('jwt', { session: false }), (req,res) => {
    User.findById(req.user._id).populate({ path: 'rec_friend_requests', select: ['fname', 'lname', 'username'] })
        .then(user => {
            res.json(user.rec_friend_requests)
        })
        .catch(e => {
            console.error(e)
            res.sendStatus(400)
        })
})
router.get('/users/friends', passport.authenticate('jwt', { session: false }), (req,res) => {
    User.findById(req.user._id).populate({ path: 'friends', select: ['fname', 'lname', 'username'] })
        .then(user => {
            res.json(user.friends)
        })
        .catch(e => {
            console.error(e)
            res.sendStatus(400)
        })
})

//accepting a friend request
router.put('/users/accept/:uid', passport.authenticate('jwt', { session: false }), (req,res) => {
    //pushing to user's friends list
    req.user.friends.push(req.params.uid)
    // removing from rec_friends_request from user
    req.user.rec_friend_requests.splice(req.user.rec_friend_requests.indexOf(req.params.uid), 1)
    res.json(req.user.rec_friend_requests)
})
module.exports = router
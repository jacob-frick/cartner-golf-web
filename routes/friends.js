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
    User.findById(req.params.uid)
    .then( user => {
        //pushing to user's friends list
        req.user.friends.push(req.params.uid)
        // removing from rec_friends_request from user
        req.user.rec_friend_requests.splice(req.user.rec_friend_requests.indexOf(req.params.uid), 1)
        req.user.save()
        // pushing to other person's friends list
        user.friends.push(req.user._id)
        //removing from other person's sent request
        user.sent_friend_requests.splice(user.sent_friend_requests.indexOf(req.user._id), 1)
        user.save()
        res.sendStatus(200)
    })
    .catch( e => {
        console.error(e)
        res.sendStatus(400)
    })
})

//cancel a sent request
router.put('/users/cancel/:uid', passport.authenticate('jwt', { session: false }), (req,res) => {
    User.findById(req.params.uid)
    .then( user => {
        // removing user's sent_friends_requests array
        req.user.sent_friend_requests.splice(req.user.sent_friend_requests.indexOf(req.params.uid), 1)
        req.user.save()
        //removing from other person's rec_friend_requests array
        user.rec_friend_requests.splice(user.rec_friend_requests.indexOf(req.user._id), 1)
        user.save()
        res.sendStatus(200)
    })
    .catch( e => {
        console.error(e)
        res.sendStatus(400)
    })
})

//decline a friend invite
router.put('/users/decline/:uid', passport.authenticate('jwt', { session: false }), (req,res) => {
    User.findById(req.params.uid)
    .then( user => {
        // removing user's rec_friends_requests array
        req.user.rec_friend_requests.splice(req.user.rec_friend_requests.indexOf(req.params.uid), 1)
        req.user.save()
        //removing from other person's sent_friend_requests array
        user.sent_friend_requests.splice(user.sent_friend_requests.indexOf(req.user._id), 1)
        user.save()
        res.sendStatus(200)
    })
    .catch( e => {
        console.error(e)
        res.sendStatus(400)
    })
})
module.exports = router
const express = require('express')
const router = express.Router()
const { User } = require('../models')
const passport = require('passport')


router.get('/send/:uid', passport.authenticate('jwt', { session: false }), (req, res) => {
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
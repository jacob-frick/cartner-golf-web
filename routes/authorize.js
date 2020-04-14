const express = require('express')
const router = express.Router()
const {Round, User} = require('../models')
const passport = require('passport')

router.get('/authorize', passport.authenticate( {session: false}), (req, res) => {
    res.sendStatus(200)
})
router.get('/authorize/round/:rid', passport.authenticate('admin', {session: false}), (req, res) => {
    Round.findById(req.params.rid)
    .then(round => {
        if(!round) res.sendStatus(401)
        else res.sendStatus(200)
    })
    .catch(() => res.sendStatus(401))
})

module.exports = router
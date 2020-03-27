const express = require('express')
const router = express.Router()
const {User} = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/register', (req, res) => {
    let { fname, lname, username, password } = req.body
    User.findOne({username})
    .then(user => {
        if(user) {
           res.sendStatus(400)
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.log('error')
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err
                    const user = new User({fname, lname, username,password: hash})
                    user.save()
                    token= jwt.sign({id: user._id}, process.env.SECRET)
                    res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })
                    res.json(token)
                })
            })
        }
    })
})
module.exports = router
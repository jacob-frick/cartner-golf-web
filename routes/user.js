const express = require('express')
const router = express.Router()
const {User} = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
router.post('/register', (req, res) => {
    let { fname, lname, email, password } = req.body
    User.findOne({email})
    .then(user => {
        if(user) {
           res.send("EMAIL EXISTS")
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                if(err) console.log('error')
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err
                    const user = new User({fname, lname, email,password: hash})
                    user.save()
                    token= jwt.sign({id: user._id}, process.env.SECRET)
                    res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 3600000 })
                    res.json({user, token})
                })
            })
        }
    })
})
router.get('/test', (req, res) => {
    console.log(req)
    res.end()
})
module.exports = router
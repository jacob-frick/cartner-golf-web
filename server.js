require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

//Strategy for deployment using JSON web token
const {Strategy: JWTStrategy, ExtractJwt} = require('passport-jwt')

const app = express()
const { User } = require('./models')
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
//encrypting and decrypting user info
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
  }, (jwtPayload, cb) => User.findById(jwtPayload.id)
      .then( user => {
        cb(null, user)
      })
      .catch( error => cb(error))
  ))
  
app.use(require('./routes'))
app.get('/*', (request, response) => {
  response.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})
require('./config/db.js')
    .then(() => app.listen(process.env.PORT || 3001))
    .catch(e => console.error(e))
require('dotenv').config()
const express = require('express')
const { join } = require('path')
const passport = require('passport')
require('./config/passport.js')(passport)
//Strategy for deployment using JSON web token
const {Strategy: JWTStrategy, ExtractJwt} = require('passport-jwt')

const app = express()
const { User } = require('./models')
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
  }, (jwtPayload, cb) => User.findById(jwtPayload.id)
      .then( user => {
        cb(null, user)
      })
      .catch( error => cb(error))
  ))
passport.use('admin', new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
  }, (jwtPayload, cb) => User.findById(jwtPayload.id)
      .then( user => {
        console.log('hello')
        if(user.accType === 'admin') {
          cb(null, user)
        } else {
          cb(null, null)
        }
      })
      .catch( error => cb(error))
  ))
app.use('/api', require('./routes'))
app.get('/*', (request, response) => {
  response.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})
require('./config/db.js')
    .then(() => {
    //   require('./config/seed.js')
      app.listen(process.env.PORT || 3001)
    })
    .catch(e => console.error(e))
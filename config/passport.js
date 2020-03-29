const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcyrpt = require('bcryptjs')

const {User} = require('./../models')

module.exports = (passport) => {
    passport.use(new LocalStrategy({usernameField: 'username'}, (username, password, done) => {
        User.findOne({username: username})
        .then(user => {
            if(!user) {
                return done(null, false, {message: 'Email not registered'})
            }
            bcyrpt.compare(password, user.password, (err, isMatch) => {
                if(err) throw err
                if(isMatch) {  
                    return done(null, user)
                } else return done(null, false, {message: 'Password Incorrect'})
            })
        })
        .catch(err => console.error(err))
    }))

    passport.serializeUser((user, done) => {
        done(null, user.id)
      })
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
          done(err, user)
        })
      })
}
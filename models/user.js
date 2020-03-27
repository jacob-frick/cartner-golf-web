const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
    fname: {
        type: String,
        required: true
      },
      lname: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true,
        unique: true 
      },
      password: {
        type: String,
        required: true
  }
})

UserSchema.plugin(require('passport-local-mongoose'))

module.exports = model('user', UserSchema)

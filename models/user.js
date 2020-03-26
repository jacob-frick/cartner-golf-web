  
const { model, Schema } = require('mongoose')

module.exports = model('user', new Schema({
  fname: {
      type: String,
      required: true
  },
  lname: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      unique: true 
  },
  password: {
      type: String,
      required: true
  }
}).plugin(require('passport-local-mongoose')))

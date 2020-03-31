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
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    sent_friend_requests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    rec_friend_requests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
})

UserSchema.plugin(require('passport-local-mongoose'))

module.exports = model('user', UserSchema)

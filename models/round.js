const { model, Schema } = require('mongoose')

const RoundSchema = new Schema({
    course_id: {
        type: Schema.Types.ObjectId,
        ref: 'course'
    },
    teebox: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    members: [
        {
            user_id: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            score: [
                {
                    hole_num: Number,
                    score: Number
                }
            ],
            total_front: {
                type: Number,
                default: 0
            },
            total_back: {
                type: Number,
                default: 0
            }
        }
    ],
    pending_members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
})

module.exports = model('round', RoundSchema)
const { model, Schema } = require('mongoose')

const RoundSchema = new Schema({
    course_id: {
        type: Schema.Types.ObjectId,
        ref: 'course'
    },
    teebox: String,
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
            ]
        }
    ],
    pending_members: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
})

module.exports = model('round', ActiveRoundSchema)
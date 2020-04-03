const { model, Schema } = require('mongoose')

const ActiveRoundSchema = new Schema({
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
    ]
})

module.exports = model('ActiveRound', ActiveRoundSchema)
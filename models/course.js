const { model, Schema } = require('mongoose')

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    holes: [
        {
            num: {
                type: Number,
                required: true
            },
            length_blue: Number,
            length_white: Number,
            par: Number,
            handicap: Number
        }
    ],
    length_blue: Number,
    length_white: Number,
    length_blue_front: Number,
    length_white_front: Number,
    length_blue_back: Number,
    length_white_back: Number,
    par: Number,
    par_front: Number,
    par_back: Number,
    rating_blue: Number,
    slope_blue: Number,
    rating_white: Number,
    slope_white: Number,

}
)

module.exports = model('course', CourseSchema)
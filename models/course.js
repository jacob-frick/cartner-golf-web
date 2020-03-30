const { model, Schema } = require('mongoose')

const CourseSchema = new Schema({
    /*
    Blue is the only required length because some courses do not list every length or are short courses that
    only have one tee box. If only 1 tee box on scorecard, that defaults to blue
    Black refers to the tips
    All colors except blue are optional and should be filled in if possible
    */
    course_name: {
        type: String,
        required: true
    },
    holes: [
        {
            hole_num: {
                type: Number,
                required: true
            },
            hole_length_black: Number,
            hole_length_blue: {
                type: Number,
                required: true
            },
            hole_length_white: Number,
            hole_length_red: Number,
            hole_length_yellow: Number,
            hole_par: Number,
            //if par for womens is not the same as mens, else optional
            hole_par_w: Number,
            handicap: Number
        }
    ],
    course_length_black: Number,
    course_length_blue: {
        type: Number,
        required: true
    },
    course_length_white: Number,
    course_length_red: Number,
    course_length_yellow: Number,
    course_par: {
        type: Number,
        required: true
    },
    //if par for womens is not the same as mens, else optional
    course_par_w: Number,
    course_rating_black: Number,
    course_slope_black: Number,
    course_rating_blue: Number,
    course_slope_blue: Number,
    course_rating_white: Number,
    course_slope_white: Number,
    course_rating_red: Number,
    course_slope_red: Number,
    course_rating_yellow: Number,
    course_slope_yellow: Number
}
)

module.exports = model('course', CourseSchema)
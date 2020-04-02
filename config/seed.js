const mongoose = require('mongoose')
const Course= require('./../models/course.js')

let courseSeed = [
    {
        name: 'Industry Hills Golf Club - The Babe',
        holes: [
            {
                num: 1,
                length_blue: 365,
                length_white: 327,
                par: 4,
                handicap: 13
            },
            {
                num: 2,
                length_blue: 334,
                length_white: 320,
                par: 4,
                handicap: 17
            },
            {
                num: 3,
                length_blue: 391,
                length_white: 356,
                par: 4,
                handicap: 7
            },
            {
                num: 4,
                length_blue: 370,
                length_white: 3348,
                par: 4,
                handicap: 15
            },
            {
                num: 5,
                length_blue: 401,
                length_white: 377,
                par: 4,
                handicap: 11
            },
            {
                num: 6,
                length_blue: 557,
                length_white: 513,
                par: 5,
                handicap: 3
            },
            {
                num: 7,
                length_blue: 237,
                length_white: 213,
                par: 3,
                handicap: 5
            },
            {
                num: 8,
                length_blue: 421,
                length_white: 408,
                par: 4,
                handicap: 1
            },
            {
                num: 9,
                length_blue: 311,
                length_white: 294,
                par: 4,
                handicap: 9
            },
            {
                num: 10,
                length_blue: 417,
                length_white: 382,
                par: 4,
                handicap: 2
            },
            {
                num: 11,
                length_blue: 522,
                length_white: 498,
                par: 5,
                handicap: 8
            },
            {
                num: 12,
                length_blue: 368,
                length_white: 343,
                par: 4,
                handicap: 10
            },
            {
                num: 13,
                length_blue: 182,
                length_white: 151,
                par: 3,
                handicap: 14
            },
            {
                num: 14,
                length_blue: 189,
                length_white: 155,
                par: 3,
                handicap: 16
            },
            {
                num: 15,
                length_blue: 381,
                length_white: 349,
                par: 4,
                handicap: 12
            },
            {
                num: 16,
                length_blue: 417,
                length_white: 396,
                par: 4,
                handicap: 6
            },
            {
                num: 17,
                length_blue: 189,
                length_white: 163,
                par: 4,
                handicap: 18
            },
            {
                num: 18,
                length_blue: 548,
                length_white: 531,
                par: 5,
                handicap: 4
            }
        ],
        par: 71,
        rating_blue: 72.0,
        rating_white: 69.9,
        length_blue: 6552,
        length_white: 6088,
        length_blue_front: 3367,
        length_blue_back: 3185,
        length_white_front: 3145,
        length_white_back: 2943,
        par_back: 35,
        par_front: 36,
        slope_blue: 129,
        slope_white: 123
    },
    {
        name: 'Pebble Beach',
        holes: [
            {
                num: 1,
                length_blue: 377,
                length_white: 332,
                par: 4,
                handicap: 8
            },
            {
                num: 2,
                length_blue: 511,
                length_white: 428,
                par: 4,
                handicap: 10
            },
            {
                num: 3,
                length_blue: 390,
                length_white: 334,
                par: 4,
                handicap: 12
            },
            {
                num: 4,
                length_blue: 326,
                length_white: 295,
                par: 4,
                handicap: 16
            },
            {
                num: 5,
                length_blue: 192,
                length_white: 130,
                par: 3,
                handicap: 14
            },
            {
                num: 6,
                length_blue: 506,
                length_white: 467,
                par: 5,
                handicap: 2
            },
            {
                num: 7,
                length_blue: 106,
                length_white: 94,
                par: 3,
                handicap: 18
            },
            {
                num: 8,
                length_blue: 427,
                length_white: 373,
                par: 4,
                handicap: 6
            },
            {
                num: 9,
                length_blue: 481,
                length_white: 435,
                par: 4,
                handicap: 4
            },
            {
                num: 10,
                length_blue: 446,
                length_white: 409,
                par: 4,
                handicap: 7
            },
            {
                num: 11,
                length_blue: 373,
                length_white: 340,
                par: 4,
                handicap: 5
            },
            {
                num: 12,
                length_blue: 201,
                length_white: 179,
                par: 3,
                handicap: 17
            },
            {
                num: 13,
                length_blue: 403,
                length_white: 372,
                par: 4,
                handicap: 9
            },
            {
                num: 14,
                length_blue: 572,
                length_white: 548,
                par: 5,
                handicap: 1
            },
            {
                num: 15,
                length_blue: 396,
                length_white: 340,
                par: 4,
                handicap: 13
            },
            {
                num: 16,
                length_blue: 401,
                length_white: 368,
                par: 4,
                handicap: 11
            },
            {
                num: 17,
                length_blue: 177,
                length_white: 163,
                par: 3,
                handicap: 15
            },
            {
                num: 18,
                length_blue: 543,
                length_white: 509,
                par: 5,
                handicap: 3
            }
        ],
        par: 71,
        rating_blue: 74.7,
        rating_white: 71.3,
        length_blue: 6828,
        length_white: 6116,
        length_blue_front: 3316,
        length_blue_back: 3512,
        length_white_front: 2888,
        length_white_back: 3228,
        par_back: 35,
        par_front: 36,
        slope_blue: 143,
        slope_white: 132
    }
]
Course.deleteMany({})
  .then(() => Course.collection.insertMany(courseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
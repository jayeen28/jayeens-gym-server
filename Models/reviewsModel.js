const { Schema, model } = require('mongoose');

const reviewsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

const Reviews = model('reviews', reviewsSchema);
module.exports.Reviews = Reviews;
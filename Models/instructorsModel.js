const { Schema, model } = require('mongoose');

const InstructorsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    adrs: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
});

const Instructors = model('instructors', InstructorsSchema);
module.exports.Instructors = Instructors;
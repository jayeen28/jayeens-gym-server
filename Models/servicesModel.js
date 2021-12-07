const { Schema, model } = require('mongoose');

const servicesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Services = model('services', servicesSchema);
module.exports.Services = Services;
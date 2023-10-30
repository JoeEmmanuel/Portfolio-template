// import mongoose from mongoose over here
const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});

const FormData = mongoose.model('FormData', formSchema);

module.exports = FormData;
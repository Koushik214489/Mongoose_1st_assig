const mongoose = require('mongoose');


const userName = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true

    },
    role: {
        type: String,
        required: true
        },
    profiles :{
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
            },
            age: {
                type:Number,
            },
    Activity: {
        lastLogin:{
            type:Date,
        } 
    }}

})
module.exports = mongoose.model('User', userName);
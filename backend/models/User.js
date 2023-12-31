const mongoose = require('mongoose');

//  name
//  surname
//  username
//  email
//  password
//  avatarUrl

const CustomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: String,
    newMessage: {
        type: Object,
        default: {},
    },
    status: {
        type: String,
        default: 'online',
    },
}, {minimize: false});

module.exports = mongoose.model('User', CustomSchema);
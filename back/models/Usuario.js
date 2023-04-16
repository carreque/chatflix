const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    name: {
        type: String,
        required: [true, 'name is required']
    },

    lastname: {
        type: String,
        required: [true, 'lastname is required']
    },

    state: {
        type: Boolean,
        default: true
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },

    password: {
        type: String,
        required: [true, 'password is required']
    },

    friends: {
        type: Array,
        default: []
    },

    avatar: {
        type: String,
        default: ''
    },

    phoneNumber:{
        type: Number,
        default: 0
    },

});

module.exports = model('Usuario', UsuarioSchema);
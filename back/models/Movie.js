const {Schema, model} = require('mongoose');

const MovieSchema = Schema ({
    name: {
        type: String,
        required: [true, 'name is required']
    },

    state: {
        type: Boolean,
        default: true
    },

    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre',
        required: 'true'
    }],

    director: {
        type: String,
        required: [true, 'Author is requierd']
    },

    description: {
        type: String,
        required: [true, 'description is required']
    },

    image: {
        type: String,
        default: ''
    }
})

module.exports = model('Movie',MovieSchema);
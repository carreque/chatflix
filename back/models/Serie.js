const {Schema, model} = require('mongoose');


const SerieSchema = Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    description: {
        type: String,
        required: [true, 'Description is required']
    },

    state: {
        type: Boolean,
        default: true
    },

    director: {
        type: String,
        required: [true, 'Director is required']
    },

    genre: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre',
        required: [true, 'Genre is required']
    }],

    cast: {
        type: String,
        required: [true, 'Cast is required']
    },

    image: {
        type: String,
        default: ''
    }
});

module.exports = model('Serie', SerieSchema);
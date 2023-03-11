const {Schema, model} = require('mongoose');

const GenreSchema = Schema({

    name: {
        type:     String,
        required: [true, 'Genre is required']
    },
    state: {
        type:    Boolean,
        default: true
    }
});

module.exports = model('Genre', GenreSchema);
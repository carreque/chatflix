const {Schema, model} = require('mongoose');

const RoomSchema = Schema({

    members: [{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        default: []
    }],

    name: {
        type: String,
        required: [true, 'number is required']
    },

    state: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Room', RoomSchema);
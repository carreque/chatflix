const {Schema, model} = require('mongoose');

const SocketConnectionTableSchema = Schema({

    userID: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'Id User is required']
    },

    socketID: {
        type: String,
        required: [true, 'Socket Id is required']
    }
});

module.exports = model('SocketConnectionTable', SocketConnectionTableSchema);
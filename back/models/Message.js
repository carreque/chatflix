const {Schema, model} = require('mongoose');

const MessageSchema = Schema ({

    body: {
        type: String,
        required: [true, 'Body is required']
    },

    dateSend: {
        type: String,
        required: [true, 'Date where the message was sent is required']
    },

    sendBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Sender is required']
    },

    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: [true, 'Room where was sent it is required']
    }
});

module.exports = model('Message', MessageSchema);
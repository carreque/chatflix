const Message  = require("../models/Message");

const createMessage = async ({body, dateSend, sendBy, room}) => {
    return;
    try{
        console.log({body, dateSend, sendBy, room});
        const newMessage = new Message({body, dateSend, sendBy, room});
        await newMessage.save();

    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

const deleteMessage = async () => {

}

module.exports = {
    createMessage,
    deleteMessage
}
const { request, response } = require("express");
const { Message } = require("../models");


const getAllMessagesFromRoom = async (req = request, res = response) => {

    try{

        const {id} = req.params;

        const messagesFound = await Message.find({room: id});

        if(!messagesFound){
            res.status(200).json({
                msg: 'There was not found any message in the room'
            })
        }

        res.status(200).json(messagesFound);
    }catch(error){
        
        res.status(500).json({
            msg: 'There was a problem gathering all the messages from the room'
        })
    }
}

module.exports = {
    getAllMessagesFromRoom
}
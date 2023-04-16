const { request, response } = require("express");
const { Room, Usuario } = require("../models");

const createNewRoom = async(req = request, res = response) => {

    try{

        const {members, name} = req.body;

        const newRoom = new Room({members, name});
        await newRoom.save();

        res.status(200).json(
            newRoom
        );

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'There was a problem creating a new Room'
        })
    }
}

const getAllRooms = async(req = request, res = response) => {

    try{

        const RoomsFounded = await Room.find({state: true});
        if(RoomsFounded === undefined){
            res.status(200).json({
                msg: 'There was not found any room '
            })
        }

        res.status(200).json(RoomsFounded);
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'There was a problem gathering all the rooms'
        })
    }
}


const getUsersOfACertainRoom = async (req = request, res = response) => {

    try{

        const {id = ""} = req.params;

        const roomFounded = await Room.findById(id);

        if(!roomFounded){
            res.status(200).json({
                msg: 'There was not found any room'
            })
        }

        const usersFounded = await Promise.all(
            roomFounded.members?.map(async (member) => {
                const userFounded = await Usuario.findById(member);
                return userFounded;
            })
        );
        res.status(200).json(usersFounded)
    }catch(error){
        console.log(error);
        res.status(500).json({
            msg: 'There was a problem getting users related to that room'
        });
    }
}

const addNewMemberToTheRoom = async (req = request, res = response) => {

    try{

        const {userId, roomId} = req.body;

        const roomFoundedWithMemberIncluded = await Room.findOne({id: roomId, members: {$in : [userId]}})
        if(roomFoundedWithMemberIncluded !== null){
            res.status(200).json({
                status: true,
                msg: 'User already exists'
            })
        }else{
            await Room.findByIdAndUpdate(roomId,
                {"$push": {"members": userId}}
            )

            res.status(200).json({
                status: true,
                msg: 'Room was successfully updated'
            })
        }


    }catch(error){
        console.log(error);
        res.status(500).json({
            status: false,
            msg: 'There was a problem adding the new member'
        })
    }
}
module.exports = {
    createNewRoom,
    getAllRooms,
    getUsersOfACertainRoom,
    addNewMemberToTheRoom
}
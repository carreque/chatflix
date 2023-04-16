const {Router} = require('express');
const { check } = require('express-validator');
const { createNewRoom, getAllRooms, getUsersOfACertainRoom, addNewMemberToTheRoom } = require('../controllers');
const { validarJWT, isValidArrayOfMongoIds, validateFields } = require('../middlewares');
const router = Router();

router.post('/createRoom', [
    validarJWT,
    isValidArrayOfMongoIds
], createNewRoom);


router.get('/getAllRooms', validarJWT, getAllRooms);

router.get('/getMembersOfARoom/:id', validarJWT, getUsersOfACertainRoom);

router.post('/addNewMemberToRoom', [
    check('roomId', 'Id of the room is necessary').notEmpty(),
    check('userId', 'User Id is necessary').notEmpty(),
    validateFields,
    validarJWT
], addNewMemberToTheRoom)
module.exports = router;
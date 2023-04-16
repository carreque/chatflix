const {Router} = require('express');
const { validarJWT } = require('../middlewares');
const { getAllMessagesFromRoom } = require('../controllers');
const router = Router();

router.get('/getAllMessages/:id', validarJWT, getAllMessagesFromRoom);
module.exports = router;
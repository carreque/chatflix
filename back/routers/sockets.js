const {Router} = require('express');
const { creationConnection } = require('../controllers');
const { validarJWT } = require('../middlewares');
const router = Router();

router.post('/sockets', validarJWT, creationConnection)

module.exports = router;
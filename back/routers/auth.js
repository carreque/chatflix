const {Router} = require('express');
const {check} = require('express-validator');
const { login, renewToken } = require('../controllers');


const { validateFields, validarJWT } = require('../middlewares');
const router = Router();

router.post('/login',[
    check('email', 'Email is required').notEmpty(),
    check('email', 'Email format is required').isEmail(),
    check('password', 'Password is required').notEmpty(),
    validateFields
], login);

router.get('/renew', validarJWT, renewToken);

module.exports = router;
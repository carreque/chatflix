const {Router} = require('express');
const {check} = require('express-validator');
const { createNewUser } = require('../controllers');
const { validateFields } = require('../middlewares');

const router = Router();

router.get('/getUser', (req, res) => {
    res.json('Obtener usuario')
});
router.post('/newUser', [
    check('name', 'name is required').notEmpty(),
    check('lastname', 'lastname is required').notEmpty(),
    check('email', 'email is required').notEmpty(),
    check('email', 'email format is required').isEmail(),
    check('password', 'password is required').notEmpty(),
    validateFields
], createNewUser);

module.exports = router;
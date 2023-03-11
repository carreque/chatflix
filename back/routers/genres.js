const {Router} = require('express');
const {check} = require('express-validator');
const { createNewGenre, getAllGenres, getGenre, getNamesGenresFromAnArray } = require('../controllers');
const { validateFields, validarJWT, isValidArrayOfMongoIds } = require('../middlewares');
const router = Router();

router.post('/newGenre', [
    check('name', 'Name is required').notEmpty(),
    validateFields,
    validarJWT
], createNewGenre)

router.get('/getGenre/:id', [
    check('id', 'id is required').notEmpty(),
    check('id', 'id must be a mongodbId').isMongoId(),
    validateFields,
    validarJWT
]
, getGenre)

router.post('/getGenresFromArray', [
    check('genre', 'it is necessary to send ids to check on').notEmpty(),
    validateFields,
    validarJWT,
    isValidArrayOfMongoIds
], getNamesGenresFromAnArray)
router.get('/getAllGenres', validarJWT, getAllGenres)
module.exports = router;

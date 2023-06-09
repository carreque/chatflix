const {Router} = require('express');
const { check } = require('express-validator');
const { createSerie, getAllSeries, filterSeries } = require('../controllers');
const { isValidArrayOfMongoIds, validateFields, validarJWT } = require('../middlewares');

const router = Router();

router.post('/createSerie', [
    check('name', 'Name is required').notEmpty(),
    check('genre', 'genre is required').notEmpty(),
    check('genre', 'genre must be an array').isArray(),
    check('director', 'director is required').notEmpty(),
    check('description', 'description is required').notEmpty(),
    isValidArrayOfMongoIds,
    validateFields,
    validarJWT
],createSerie);

router.get('/getAllSeries/:from/:limit', validarJWT, getAllSeries);

router.get('/getFilterSeries/:genreId/:from/:limit', validarJWT, filterSeries);
module.exports = router;
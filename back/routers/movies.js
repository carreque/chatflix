const {Router} = require('express');
const {check} = require('express-validator');
const { createNewMovie, getAllMovies, filterMovieByGenre } = require('../controllers');
const { validateFields, validarJWT, isValidArrayOfMongoIds } = require('../middlewares');
const router = Router();

router.post('/newMovie', [
    check('name', 'Name is required').notEmpty(),
    check('genre', 'genre is required').notEmpty(),
    check('genre', 'genre must be an array').isArray(),
    check('director', 'director is required').notEmpty(),
    check('description', 'description is required').notEmpty(),
    isValidArrayOfMongoIds,
    validateFields,
    validarJWT
], createNewMovie)


router.get('/getMoviesFiltered/:genreid/:from/:limit', validarJWT, filterMovieByGenre)
router.get('/getAllMovies/:from/:limit', validarJWT,getAllMovies)

module.exports = router;
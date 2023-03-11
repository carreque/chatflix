const auth = require('./auth');
const users = require('./users');
const genres = require('./genres');
const movies = require('./movies');

module.exports = {
    ...auth,
    ...users,
    ...genres,
    ...movies
}
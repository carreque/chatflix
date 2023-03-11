const auth = require('./auth');
const users = require('./users');
const genres = require('./genres');
const movies = require('./movies');
const series = require('./series');

module.exports = {
    ...auth,
    ...users,
    ...genres,
    ...movies,
    ...series
}
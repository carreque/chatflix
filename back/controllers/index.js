const auth = require('./auth');
const users = require('./users');
const genres = require('./genres');
const movies = require('./movies');
const series = require('./series');
const rooms = require('./rooms');
const messages = require('./messages');

module.exports = {
    ...auth,
    ...users,
    ...genres,
    ...movies,
    ...series,
    ...rooms,
    ...messages
}
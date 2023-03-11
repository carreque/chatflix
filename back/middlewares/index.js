const validateFields = require('./validateFields');
const validateJWT = require('./validateJWT');
const isValidArrayOfMongoIds = require('./validateArrayMongoId');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...isValidArrayOfMongoIds
}
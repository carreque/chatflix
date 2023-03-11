const jwt = require('jsonwebtoken');

const generateJWT = (uid = '') => {

    return new Promise((resolve, reject) => {
        const payload = {uid};
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: '2h'
        }, (error, token) => {
            if(error){
                reject('There was a problem generating user token ');
            }else{
                resolve(token);
            }
        })
    })
}

module.exports = {
    generateJWT
}
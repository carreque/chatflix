const {response, request} = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response, next) => {

    //Obtain token from the request
    const token = req.header('x-token');
    
    if(!token){
        return res.status(401).json({
            msg: 'Token not found'
        })
    }

    try{

        const {uid} = jwt.verify(token, process.env.SECRETKEY);
        req.uid = uid;

    }catch(error){
        return res.status(401).json({
            msg: 'Incorrect token'
        })
    }
    next();
}

module.exports = {
    validarJWT
}
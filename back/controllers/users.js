const {request, response} = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
const { generateJWT } = require('../helpers');

const createNewUser = async (req = request, res = response) => {
    
    const {password, ...rest} = req.body;
    try{
        
        const salt = bcrypt.genSaltSync();
        const passwordEncrypted = bcrypt.hashSync(password, salt);

        const usuario = new Usuario({
            password: passwordEncrypted,
            ...rest
        });

        
        await usuario.save();
        const token = await generateJWT(usuario.id);
        res.status(200).json({
            msg: 'User created succesfully',
            name: usuario.name,
            uid: usuario.id,
            token
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Something went wrong creating your account'
        });
    }
}

module.exports = {
    createNewUser
}
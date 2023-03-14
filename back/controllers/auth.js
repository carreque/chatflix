const {request, response} = require('express');
const bycrypt = require('bcrypt');
const { Usuario } = require("../models");
const { generateJWT } = require('../helpers');

const login = async (req = request, res = response) => {

    const {email, password} = req.body;
    try{
        const user = await Usuario.findOne({email});

        //It checks if user exits and it is operative. If state is false, the user has been deleted
        if(!user || !user.state){
            return res.status(401).json({
                msg: 'Wrong credentials'
            })
        }

        const passwordComparaison = bycrypt.compareSync(password, user.password);

        if(!passwordComparaison){
            return res.status(401).json({
                msg: 'Wrong Credentials'
            });
        }

        const token = await generateJWT(user.id);
        res.status(200).json({
            token,
            uid: user.id,
            name: user.name
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'It seems to be a connection problem, please try it later'
        })
    }

}


const renewToken = async (req = request, res = response) => {

    const {uid} = req;

    //Generate again the token
    const token = await generateJWT(uid);
    const {name} = await Usuario.findById(uid);
    res.json({
        token,
        uid,
        name
    })
}
module.exports = {
    login,
    renewToken
}
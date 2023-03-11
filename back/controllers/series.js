const { request, response } = require("express");
const Serie = require("../models/Serie");


const createSerie = async (req = request, res = response) => {

    const {name, description, genre, director, cast,  image = ''} = req.body;

    try{

        const newSerie = new Serie({
            name,
            description,
            genre,
            director,
            cast,
            image
        });
        
        await newSerie.save();

        res.status(200).json({
            msg: 'Serie succesfully created',
            newSerie
        })
        
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'There was a problem creating the serie'
        })
    }
}

module.exports = {
    createSerie
}
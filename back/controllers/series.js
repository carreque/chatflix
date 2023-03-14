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


const getAllSeries = async (req = request, res = response) => {

    try{

        const {from = 0, limit = 6} = req.params;

        const series = await Serie.find({state: true})
                                .skip(Number(from))
                                .limit(Number(limit));

        if (!series){
            res.status(200).json({
                msg: 'There was not any series to show'
            })
        }

        res.status(200).json(
            series
        )
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'There was a problem getting all series'
        })
    }
}

const filterSeries = async (req = request, res = response) => {

    try{

        const {genreId, from = 0, limit = 6} = req.params;
        const series = await Serie.find({state:true, genre: {$in: [genreId]}})
                                  .skip(Number(from))
                                  .limit(Number(limit));
        
        if (!series){
            res.status(200).json({
                msg: 'There are not found any series with that id'
            })
        }       
        
        res.status(200).json(
            series
        )
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'There was a problem while the series were filtering'
        })
    }
}
module.exports = {
    createSerie,
    getAllSeries,
    filterSeries
}
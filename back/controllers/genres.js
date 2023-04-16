const { request, response } = require("express");
const { Genre } = require("../models");

const createNewGenre = async ( req = request, res = response) => {

    const {name} = req.body;

    try{    

        const newGenre = new Genre({name});
        await newGenre.save();

        res.status(200).json({
            newGenre
        })

    }catch(error){
        console.log(error);
        return res.status(400).json({
            msg: 'There was a problem creating the new genre'
        });
    }
}

const getAllGenres = async (req = request, res = response) => {

    try{

        const genres = await Genre.find({state: 'true'})
        res.status(200).json({
            genres
        })
    }catch(error){
        return res.status(500).json({
            msg: 'There was a problem getting all genres'
        });
    }
}


const getGenre = async (req = request, res = response) => {

    const {id} = req.params;
    try{

        const genreFound = await Genre.findById(id);
        
        if(!genreFound){
            return res.status(200).json({
                msg: 'genre not found'
            })
        }

        res.status(200).json(
            genreFound
        )
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'There was a problem getting the given genre'
        });
    }
}

const getNamesGenresFromAnArray = async (req = request, res = response) => {

    let {genre} = req.body;

    try{
        //It checks if the information comes serialized
        
        if(typeof genre === 'string') genre = JSON.parse(genre)
        //In order to bring genres name from database, is necessary to launch a group of promises
        const genresArrayObjects = await Promise.all(
            genre.map(async genreId => {
                const genreFound = await Genre.findById(genreId);
                return genreFound.name;
            })
        )

        if(genresArrayObjects.length != genre.length){
            return res.status(500).json({
                msg: 'There was a problem getting one genre'
            });
        }

        res.status(200).json(
            genresArrayObjects
        )
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'There was a problem getting the given genres'
        });
    }
}
module.exports = {
    createNewGenre,
    getAllGenres,
    getGenre,
    getNamesGenresFromAnArray
}
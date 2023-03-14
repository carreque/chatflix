const { request, response } = require("express")
const {Movie} = require('../models');

const createNewMovie = async (req = request, res = response) => {

    const {name, genre, director, description, image = ""} = req.body;
    try{

        const newMovie = new Movie({name, genre, director, description, image});
        await newMovie.save();

        res.status(200).json({
            msg: 'Movie succesfully created',
            newMovie
        })
    }catch(error){
        console.log(error);
        return res.status(400).json({
            msg: 'There was a problem creating the new movie'
        });
    }
}

const getAllMovies = async (req = request, res = response) => {

    try{
        const {from = 0, limit = 6} = req.params;
        const movies = await Movie.find({state: true})
                                  .skip(from)
                                  .limit(Number(limit));

        if(!movies){
            return res.status(200).json({
                msg: 'There were not any movies in the db'
            });
        }

        res.status(200).json(
            movies
        )

    }catch(error){
        console.log(error);
        return res.status(400).json({
            msg: 'There was a problem getting all the movies'
        });
    }
}

const filterMovieByGenre = async(req = request, res = response) => {
    
    try{

        const {genreid, from = 0, limit = 6} = req.params;
        const movies = await Movie.find({state:true, genre: {$in: [genreid]}}) //Para comprobar que existe un id dentro del array de géneros
                                   .skip(from)
                                   .limit(Number(limit))
        if (!movies){
            return res.status(200).json({
                msg: 'There were not any movies that matched to the filter'
            })
        }

        res.status(200).json(
            movies
        )
    }catch(error){
        console.log(error);
        return res.status(400).json({
            msg: 'There was a problem while movies were filtering '
        });
    }
}
module.exports = {
    createNewMovie,
    getAllMovies,
    filterMovieByGenre
}
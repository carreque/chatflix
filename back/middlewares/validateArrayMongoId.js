const { request, response } = require("express")
const {isValidObjectId} = require('mongoose');

const isValidArrayOfMongoIds = (req = request, res = response, next) => {

    try{

        let {genre} = req.body;
        if (typeof genre === 'string') genre = JSON.parse(genre); 
        const numberGenresUnknown = genre?.filter(genr => !isValidObjectId(genr))

        if(numberGenresUnknown.length){
            return res.status(400).json({
                msg: 'Genres are not recognized'
            })
        }
        
    }catch(error){
        console.log(error);
        return res.status(400).json({
            msg: 'There was a problem trying to process the genres'
        })
    }

    next()
}

module.exports = {
    isValidArrayOfMongoIds
}
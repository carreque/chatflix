const mongoose = require('mongoose');

const dbConnection = async() => {

    try{

        await mongoose.connect(process.env.MONGOCNN_DB);
        console.log('Db Online');
    }catch(error){
        console.log(error);
        throw new Error('Se ha producido un error a la hora de conectar a la BD')
    }
}

module.exports = {
    dbConnection
}
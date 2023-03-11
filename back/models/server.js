const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/connection');
require('dotenv').config();

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';
        this.paths = {
            auth: '/api/auth',
            users: '/api/user',
            genres: '/api/genre',
            movies: '/api/movies'
        }

        this.connectToDB();
        this.middlewares();
        this.routes();
    }

    async connectToDB() {
        await dbConnection();
    }

    middlewares(){

        //In order to stablish connection between back and front for development purposes.
        this.app.use(cors());

        //Public directory
        this.app.use(express.static('public'));

        //Parsing body as json
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.paths.auth, require('../routers/auth'));
        this.app.use(this.paths.users, require('../routers/users'));
        this.app.use(this.paths.genres, require('../routers/genres'));
        this.app.use(this.paths.movies, require('../routers/movies'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Corriendo en puerto: ${this.port}`)
        });
    }
}

module.exports = Server;
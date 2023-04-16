const express = require('express');
const http = require('http');
const cors = require('cors');
const { dbConnection } = require('../database/connection');
const {Server} = require('socket.io');
const jwt = require('jsonwebtoken');
const { creationConnection, createMessage } = require('../helpers');
require('dotenv').config();

class ServerChatflix{

    constructor(){
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = process.env.PORT || '8080';
        this.io = new Server(this.server, {
            cors: {
                origin: 'http://localhost:5173'
            }
        });
        this.paths = {
            auth: '/api/auth',
            users: '/api/user',
            genres: '/api/genre',
            movies: '/api/movies',
            series: '/api/series',
            rooms: '/api/rooms',
            messages: '/api/messages'
        }

        this.connectToDB();
        this.middlewares();
        this.routes();
        this.connections();


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
        this.app.use(this.paths.series, require('../routers/series'));
        this.app.use(this.paths.rooms, require('../routers/rooms'));
        this.app.use(this.paths.messages, require('../routers/messages'));
    }

    connections(){
        this.io.on('connection', (socket) => {

            socket.on('storeConnection', async (token) => {

                if(token !== undefined && token !== null){
                    const {uid} = jwt.verify(token, process.env.SECRETKEY);
                    await creationConnection({
                            socketID: socket.id,
                            uid
                    })
                   
                }
            });

            socket.on('message', async (message) => {
                
                await createMessage(message);
                socket.broadcast.emit('message', message);
            })
        });
    }
    listen(){
        this.server.listen(this.port, () => {
            console.log(`Corriendo en puerto: ${this.port}`)
        });
    }
}

module.exports = ServerChatflix;
const SocketConnection = require("../models/SocketConnection");
require('dotenv').config();

const creationConnection = async ({socketID, uid}) => {

    try{

        //First check if a connection with that user id exists. If so, then the content will be updated instead of created again.
        const mode = process.env.MODE;

        let connectionFounded = await SocketConnection.findOne({"userID": uid});
        if(connectionFounded === null){
            console.log('entro');
            connectionFounded = new SocketConnection({userID : uid, socketID});
            await connectionFounded.save();
        }else{

            await SocketConnection.findByIdAndUpdate(connectionFounded._id, {
                socketID,
                uid
            })
        }
        
        if(mode === 'DEV'){

            /**Because of the strict mode, the useEffect is launched twice so it creates two requests and two records in DB. So meanwhile the mode is development, these part is going to avoid duplicate records. */
            let connectionDoubled = await SocketConnection.find({"userID": uid});
            
            if(connectionDoubled.length > 1){

                await connectionDoubled[0].delete();
            }
        }
        
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

module.exports = {
    creationConnection
}
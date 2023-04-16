import { chatFlixApi } from "../api";

export const useNewMember = async (userId, roomId) => {
    
    try{

        const {data} = await chatFlixApi.post('/rooms/addNewMemberToRoom', {
            "userId": userId,
            "roomId": roomId
        });

        return data;
    }catch(error){ 
        console.log(error);
        throw new Error(error);
    }
}

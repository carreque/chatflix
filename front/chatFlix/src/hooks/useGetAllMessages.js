import { chatFlixApi } from "../api";

export const useGetAllMessages = async ({roomId}) => {
  
    try{
        const {data} = await chatFlixApi.get(`/messages/getAllMessages/${roomId}`);
        return data;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

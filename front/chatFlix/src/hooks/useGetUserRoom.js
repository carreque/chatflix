import { chatFlixApi } from "../api";

export const useGetUserRoom = async (idRoom = "") => {
    
    try{
        const {data} = await chatFlixApi.get(`/rooms/getMembersOfARoom/${idRoom}`);
        return data;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

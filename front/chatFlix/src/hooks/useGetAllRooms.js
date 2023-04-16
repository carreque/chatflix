import { chatFlixApi } from "../api";

export const useGetAllRooms = async () => {

  try{
    const {data} = await chatFlixApi.get('rooms/getAllRooms');
    return data;
  }catch(error){
    console.log(error);
    throw new Error(error);
  }

}

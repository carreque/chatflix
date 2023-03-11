import { chatFlixApi } from "../api";

export const useGetMovies = async (from = 0, limit = 6) => {

  try{
    const {data} = await chatFlixApi.get(`movies/getAllMovies/${from}/${limit}`);
    return data;
  }catch(error){
    console.log(error);
    throw new Error(error);
  }
}

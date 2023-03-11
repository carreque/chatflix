import { chatFlixApi } from "../api"


export const useGenre = async () => {

  try{

    const {data} = await chatFlixApi.get('genre/getAllGenres');
    return data.genres;

  }catch(error){
    console.log(error);
    throw new Error(error);
  }

}

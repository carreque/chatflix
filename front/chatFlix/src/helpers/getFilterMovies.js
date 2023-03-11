import { chatFlixApi } from "../api";


export const getFilterMovies = async (genreId = '', from = 0, limit = 6) => {
  
    try{
        
        //In order to avoid to do an unnecessary request to the backend
        if (genreId != '')
        {
            const {data} = await chatFlixApi.get(`/movies/getMoviesFiltered/${genreId}/${from}/${limit}`);
            return data;
        }
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

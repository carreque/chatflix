import { chatFlixApi } from "../api";

export const getFilterSeries = async (genreId = '', from = 0, limit = 6) => {

    try{
        
        //In order to avoid to do an unnecessary request to the backend
        if (genreId != '')
        {
            const {data} = await chatFlixApi.get(`/series/getFilterSeries/${genreId}/${from}/${limit}`);
            return data;
        }
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
  
}

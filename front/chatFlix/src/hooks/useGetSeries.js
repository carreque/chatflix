import { chatFlixApi } from "../api";


export const useGetSeries = async (from = 0, limit = 6) => {
  try{

    const {data} = await chatFlixApi.get(`/series/getAllSeries/${from}/${limit}`);
    return data;
  }catch(error){
    console.log(error);
    throw new Error(error);
  }
}

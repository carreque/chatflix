import { chatFlixApi } from "../api";

export const useGetGenresFromArray = async (genresToCheckOn = []) => {

    try{
        //If we have to send information through a get method we need it to use params property or change it to the post method through data property.
        const {data} = await chatFlixApi.post('genre/getGenresFromArray', {       
            genre: JSON.stringify(genresToCheckOn)           
        })

        return data
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

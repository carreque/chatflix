import { useDispatch, useSelector } from "react-redux"
import { onChangeGenreSelected } from "../store/genres";

export const useGenreStore = () => {

  const {id, type} = useSelector(state => state.genreSelector);
  const dispatch = useDispatch();

  const changeGenreSelected = async ({id = '', type = ''}) => {
    
    try{
        dispatch(onChangeGenreSelected({id, type}));
    }catch(error){
        console.log(error);
        dispatch(onChangeGenreSelected({id: '', type: ''}));
    }
  }
  return {
    //Properties
    id,
    type,
    //Methods
    changeGenreSelected
  }
}

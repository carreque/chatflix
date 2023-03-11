import { useEffect, useState } from "react";
import { useGenre } from "../../hooks"

export const GenreList = ({setGenreSelected}) => {
  
  const [genres, setGenres] = useState([]);
  /*
  One way to do it

  const getAllGenres = async () => {
    const genresFromBackend = await useGenre();
    setGenres(genresFromBackend);
  }*/

  //Second way to do it
  const getAllGenres = () => {
    useGenre()
    .then(res => {
        setGenres(res)
    }).catch(error => {
        console.log(error);
        throw new Error(error);
    })
  }

  const handleClickGenreSelected = (e) => {
    
    setGenreSelected(e.target.getAttribute('data-name'));
  }
  //It is going to be executed the first time that the componet is rendered
  useEffect(() => {
    getAllGenres();
  }, [])
  
  return (
    genres?.map(genre => <li key={genre._id} data-name={genre._id} onClick={handleClickGenreSelected}>{genre.name}</li> )
  )
}

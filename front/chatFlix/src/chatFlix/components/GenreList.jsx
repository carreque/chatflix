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
    
    const genreLiElements = document.querySelectorAll('[data-name]');
    genreLiElements.forEach(li => li.classList.add('genreListOption'));
    const targetDataName = e.target.getAttribute('data-name');
    const genreElementSelected = document.querySelector(`[data-name='${targetDataName}']`);
    genreElementSelected.classList.add('activeGenre');
    setGenreSelected(targetDataName);
  }
  //It is going to be executed the first time that the componet is rendered
  useEffect(() => {
    getAllGenres();
  }, [])
  
  return (
    genres?.map(genre => <li key={genre._id} data-name={genre._id} className='genreListOption' onClick={handleClickGenreSelected}>{genre.name}</li> )
  )
}

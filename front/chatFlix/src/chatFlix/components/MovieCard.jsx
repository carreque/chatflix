import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetGenresFromArray } from "../../hooks";


export const MovieCard = ({Movie}) => {

  const movieImage = `src/assets/movies/${Movie._id}.jpg`;
  const [genres, setMoviesGenres] = useState();

  const getGenresMovie = async (genresMovie) => {
    const genresRelatedToMovie = await useGetGenresFromArray(genresMovie);
    setMoviesGenres(genresRelatedToMovie);
  }

  useEffect(() => {
    getGenresMovie(Movie.genre);
  }, [])
  
  return (
    <div className="col-4 animate__animated animate__fadeIn" style={{'padding': '10px'}}>
      <div className="card">
          <div className="row no-gutters">
              <div className="col-12">
                  <img src={ movieImage } className="card-img" alt={ Movie.name } loading="lazy" onError={({currentTarget}) => {
                    currentTarget.onerror = null;
                    currentTarget.src = Movie.image;
                  }} height='500vh'/>
              </div>
              <div className="col-12">
                  <div className="card-body">
                      <h5 className="card-title text-center">{ Movie.name }</h5>
                      <p className="card-text descriptionContainer">{ Movie.description.substring(0,446) }...</p>
                      <p className="card-text">Director: {Movie.director}</p>
                      <p className="card-text">
                        <small className="text-muted">Genres: { genres?.map((genre,idx ) => {
                          return idx < (genres.length - 1) ? genre + ', ' : genre
                        })}</small>
                      </p>

                      <Link to='/'>
                          Más..
                      </Link>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

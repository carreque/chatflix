import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetGenresFromArray } from "../../hooks";

export const SerieCard = ({Serie}) => {

    const serieImage = `src/assets/series/${Serie._id}.jpg`;
    const [genres, setSeriesGenre] = useState();

    const getGenresMovie = async (genresSerie) => {
        const genresRelatedToMovie = await useGetGenresFromArray(genresSerie);
        setSeriesGenre(genresRelatedToMovie);
    }

    useEffect(() => {
    getGenresMovie(Serie.genre);
    }, [])
    return (
        <div className="col-4 animate__animated animate__fadeIn" style={{'padding': '10px'}}>
          <div className="card">
              <div className="row no-gutters">
                  <div className="col-12">
                      <img src={ serieImage } className="card-img" alt={ Serie.name } loading="lazy" onError={({currentTarget}) => {
                        currentTarget.onerror = null;
                        currentTarget.src = Serie.image;
                      }} height='500vh'/>
                  </div>
                  <div className="col-12">
                      <div className="card-body">
                          <h5 className="card-title text-center">{ Serie.name }</h5>
                          <p className="card-text descriptionContainer">{ Serie.description.substring(0,446) }...</p>
                          <p className="card-text">Director: {Serie.director}</p>
                          <p className="card-text">
                            <small className="text-muted">Genres: { genres?.map((genre,idx ) => {
                              return idx < (genres.length - 1) ? genre + ', ' : genre
                            })}</small>
                          </p>
                          <p className="card-text">Cast: {Serie.cast}</p>
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

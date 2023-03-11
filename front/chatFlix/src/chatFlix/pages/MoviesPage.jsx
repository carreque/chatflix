import { Grid, Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useGetMovies } from '../../hooks'
import { MovieCard } from '../components/MovieCard'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

const limitMovies = 6;

export const MoviesPage = () => {

  const [movies, setMovies] = useState([]);
  const [genreSelected, setGenreSelected] = useState('');

  const getAllMovies = async (from, limit) => {
    const moviesFound = await useGetMovies(from, limit);
    setMovies(moviesFound);
  }

  const handleChangePages = async (e) => {

    const fromMoviesIndex = (Number(e.target.innerText) - 1) * 6;
    await getAllMovies(fromMoviesIndex, limitMovies);
  }


  const filterMovies = () => {
    console.log(genreSelected);
    const moviesFiltered = movies.filter(movie => {
      console.log({
        movie})
      return movie.genre.includes(genreSelected)});
    setMovies(moviesFiltered);
  }
  //When the component is rendered for the first time,It will bring the first page movies 
  useEffect(() => {
    getAllMovies(0,limitMovies);
  }, [])
  
  useEffect(() => {
    filterMovies()  
  }, [genreSelected])
  
  return (
    <>
      <Navbar/>
      <Grid container sx={{'display': 'flex'}}>
        <Grid container item sm={2} xs={0} sx={{minHeight: '94.2vh'}}>
            <Sidebar setGenreSelected={setGenreSelected}/>
        </Grid>
        <Grid container item sm={10} xs={0} sx={{'padding': '30px'}}>
          {
            
            movies?.map(movie => {
              return <MovieCard key={movie.name} Movie={movie}/>
            })
          }

          <Grid container item sm={10} className="justify-content-center mt-3">
            <Pagination count={10} variant="outlined" color="secondary" onChange={handleChangePages}/>
          </Grid>
        
        </Grid>
      </Grid>
      
    </>
  )
}

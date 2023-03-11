import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
       movies: [],
   },
   reducers: {

       
       filter: (state, {payload} ) => {
            state.movies = state.movies.filter(movie => movie.genre.includes(payload));
       },
   }
});


// Action creators are generated for each case reducer function
export const { filter } = moviesSlice.actions;
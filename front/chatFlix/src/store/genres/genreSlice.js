import { createSlice } from '@reduxjs/toolkit';

export const genreSlice = createSlice({
   name: 'genreSelector',
   initialState: {
       id: '',
       type: 'movies'
   },
   reducers: {
       onChangeGenreSelected: (state, {payload} ) => {
            state.id = payload.id;
            state.type = payload.type;
       },
   }
});


// Action creators are generated for each case reducer function
export const { onChangeGenreSelected } = genreSlice.actions;
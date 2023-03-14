import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { genreSlice } from './genres';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    genreSelector: genreSlice.reducer
  },
})
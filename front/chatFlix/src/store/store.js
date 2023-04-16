import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { genreSlice } from './genres';
import { socketSlice } from './socket';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    genreSelector: genreSlice.reducer,
    generalSocket: socketSlice.reducer
  },
})
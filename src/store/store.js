import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './slices/movie'



export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
})
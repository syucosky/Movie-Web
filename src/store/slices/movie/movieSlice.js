import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        page: 0,
        movies: [],
        isLoading: false,
    },
    reducers: {
        setMovies: (state,action) =>{
            state.isLoading = false;
            state.page = action.payload.page;
            state.movies = action.payload.movies;
        }
    },
    
});

export const {setMovies} = movieSlice.actions;
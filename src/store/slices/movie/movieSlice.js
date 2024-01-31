import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        page: 0,
        movies: [],
        img: [],
        isLoading: false,
    },
    reducers: {
        startLoadingMovies:(state)=>{
            state.isLoading = true;
        },
        setMovies: (state,action) =>{
            state.isLoading = false;
            state.page = action.payload.page;
            state.movies = action.payload.movies;
        }
    }
});



export const { startLoadingMovies, setMovies} = movieSlice.actions;
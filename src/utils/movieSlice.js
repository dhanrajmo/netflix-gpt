import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {nowPlayingMovies : null, trailerVideo : null, popularMovies : null, topRatedMovies : null,upComming : null},
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMoviesTrailer : (state,action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpCommingMovies : (state,action) => {
            state.upComming = action.payload;
        }
    }
})

export default movieSlice.reducer
export const {addNowPlayingMovies , addMoviesTrailer, addPopularMovies, addTopRatedMovies,addUpCommingMovies}  = movieSlice.actions
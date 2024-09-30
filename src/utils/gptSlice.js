import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice(
  {
    name : 'gptslice',
    initialState : {
        showGptSearch : false,
        movieList : null,
        movieResult : null
    },
    reducers : {
        toggleGptSearchView : (state) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptmovieResult : (state,action) => {
            const {movieList,movieResults} = action.payload;
            state.movieList = movieList,
            state.movieResult = movieResults
        },
    },
  },
    
)

export default gptSlice.reducer
export const {toggleGptSearchView, addGptmovieResult} = gptSlice.actions
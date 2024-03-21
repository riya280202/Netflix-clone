import {createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",
    initialState:{
        movieName: null,
        searchedMovieName: null
    },
    reducers: {
        setMovieSearchDetails: (state,action)=>{
            const {searchMovie, movieDetails} = action.payload
            state.movieName = searchMovie;
            state.searchedMovieName = movieDetails
        },
        
    }
})

export const { setMovieSearchDetails} = searchSlice.actions;
export default searchSlice.reducer;
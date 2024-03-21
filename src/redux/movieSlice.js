import {createSlice} from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        popularMovie: null,
        topRatedMovie: null,
        upcomingMovie: null,
        toggle: false,
        trailerKey: null,
        open: false,
        id: ""
    },
    reducers: {
        getNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovie= action.payload
        },
        getPopularMovies: (state, action)=>{
            state.popularMovie = action.payload
        },
        getTopRatedMovies: (state, action)=>{
            state.topRatedMovie = action.payload
        },
        getUpcomingMovies: (state, action)=>{
            state.upcomingMovie = action.payload
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle
        },
        getTrailerMovieKey: (state, action)=>{
            state.trailerKey = action.payload
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        getId: (state, action) => {
            state.id= action.payload
        }
    }
})


export const {getNowPlayingMovies,getPopularMovies, getTopRatedMovies,getUpcomingMovies, setToggle, getTrailerMovieKey, setOpen, getId} = movieSlice.actions;
export default movieSlice.reducer;
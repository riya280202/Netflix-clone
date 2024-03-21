import {createSlice} from "@reduxjs/toolkit"

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovie: null,
        popularMovie: null,
        topRatedMovie: null,
        upcomingMovie: null,
        toggle: false,
        trailer: null
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
        getTrailerMovie: (state, action)=>{
            state.trailer = action.payload
        }
    }
})


export const {getNowPlayingMovies,getPopularMovies, getTopRatedMovies,getUpcomingMovies, setToggle, getTrailerMovie} = movieSlice.actions;
export default movieSlice.reducer;
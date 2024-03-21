import React, { useState } from "react";
import axios from "axios"
import { options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setMovieSearchDetails } from "../redux/searchSlice";
import { setIsLoading } from "../redux/userSlice";
import MovieList from "./MovieList"

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch()
  const isLoading = useSelector(store=> store.app.isLoading)
  const x = useSelector(store=> store.search)
  console.log(x.searchedMovieName)

  const searchHandler = (e)=> {
    setSearchMovie(e.target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true))
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`, options)
      const movieDetails = res?.data?.results;
      dispatch(setMovieSearchDetails({searchMovie, movieDetails}))
    } catch (error) {
      console.log(error);
    } finally{
      dispatch(setIsLoading(false))
    }

    setSearchMovie("")
  }
  
  


  return (
    <>
    <div className="flex justify-center pt-[10%] w-[100%]">
      <form className="w-[50%]" onSubmit={submitHandler}>
        <div className="flex justify-between shadow-md border-gray-200 rounded-lg w-[100%] p-3">
          <input value={searchMovie} onChange={searchHandler} type="text" placeholder="Enter here..." className="outline-none w-full text-lg rounded-sm" />
          <button className="bg-red-800 text-white rounded-sm px-4 py-2">{!isLoading? "Search" :"Searching"}</button>
        </div>
      </form>
    </div>
    <div className="p-3">
      <h1 className="text-xl font-semibold">Results for : {x.movieName}</h1>
      <MovieList movies={x.searchedMovieName}/>
    </div>
    </>
  );
};

export default SearchMovie;

import React, { useEffect } from 'react'
import Header from './Header'
import {  useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovie from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatesMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
  const user = useSelector((store)=> store.app.user)
  const navigate = useNavigate();
  const toggle = useSelector(store => store.movie.toggle)
  


  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(()=> {
    if(!user){
      navigate("/")
    }
  },[])

  
  return (
    <div>
        <Header/>
        {!toggle ? (<div>
          <MainContainer/>
          <MovieContainer/>
        </div>): <SearchMovie/>}
    </div>
  )
}

export default Browse
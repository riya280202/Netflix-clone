import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movie = useSelector(store => store.movie)

  return (
    <div className='bg-black'>

      <MovieList title={"Now Playing movie"} movies={movie.nowPlayingMovie}/>
      <MovieList title={"Popular movie"} movies={movie.popularMovie}/>
      <MovieList title={"Top Rated movie"} movies={movie.topRatedMovie}/>
      <MovieList title={"Upcoming movie"} movies={movie.upcomingMovie}/>
      
    </div>
  )
}

export default MovieContainer
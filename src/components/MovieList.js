import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
  return (
    <div className=''>
        <h1 className='text-3xl text-white mb-3 pt-3'>{props.title}</h1>
        <div className='flex overflow-x-auto cursor-pointer no-scrollbar'>
            <div className='flex items-center'>
                {/* {props.movies>0 ? props.movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />): <h1 className='text-white'>No movies available</h1>} */}
                {props.movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
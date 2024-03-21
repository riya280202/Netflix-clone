import React from 'react'
import { IMAGE_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-2'>
        <img src={`${IMAGE_URL}/${posterPath}`} alt='banner'/>
    </div>
  )
}

export default MovieCard
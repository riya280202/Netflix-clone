import React from 'react'
import { IMAGE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/movieSlice';

const MovieCard = ({posterPath, title, id}) => {
  const dispatch = useDispatch()
  if(posterPath===null) return null;
  

  const handleDialog = () => {
    dispatch(setOpen(true))
    dispatch(getId(id))
  }

  return (
    <div className='w-48 pr-2' onClick={handleDialog}>
        <img src={`${IMAGE_URL}/${posterPath}`} alt={title} />
    </div>
  )
}

export default MovieCard
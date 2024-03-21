import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovie);
  // const trailer = useSelector(store => store.movie.trailer)
  // console.log(trailer)
  if(!movie) return;

  const {overview, id, title} = movie[8];
  return (
    <div className='w-[vw]' >
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
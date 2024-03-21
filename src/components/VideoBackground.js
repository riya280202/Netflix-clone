import React from "react";
import useMovieBg from "../hooks/useMovieBg";
import { useSelector } from "react-redux";

const VideoBackground = ({movieId}) => {
  useMovieBg(movieId)
  const trailerKey = useSelector(store => store.movie.trailerKey)

  
  
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video overflow-x-0 h-[90vh]"
        src={`https://www.youtube.com/embed/${trailerKey}?si=GBLEtsVLwK9Z4aVs&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;

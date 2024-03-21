import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute text-white pt-[18%] p-12 w-[40vw]">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="font-bold">
        {overview}
      </p>
      <div className="flex mt-3">
        <button className="px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 flex items-center">
          <FaPlay />
          <span className="pl-2">Play</span>
        </button>
        <button className="px-6 py-2 bg-white text-black rounded-md ml-3 hover:bg-opacity-80 flex items-center">
          <IoMdInformationCircle size="24px" />
          <span className="pl-2">Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

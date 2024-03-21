import React from "react";

const SearchMovie = () => {
  return (
    <div className="flex justify-center p-[10%] w-[100%]">
      <form className="w-[50%]">
        <div className="flex justify-between shadow-md border-gray-200 rounded-lg w-[100%] p-3">
          <input type="text" placeholder="Enter here..." className="outline-none w-full text-lg rounded-sm" />
          <button className="bg-red-800 text-white rounded-sm px-4 py-2">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchMovie;

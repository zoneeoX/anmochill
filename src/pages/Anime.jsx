import React from "react";
import { useLocation } from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai'

const Anime = () => {
  const location = useLocation();
  /**
   *
   * * favorite through this component by extracting the mal id (searching in the api) and then push it into an array in a slice (store)
   * ! theoritical
   */

  /**
   * * TITLE, SYNOPSIS, TRAILER, IMAGES
   */

  return (
    <div className="bg-sky-100 w-screen min-h-screen max-h-full">
      <img
        src={location.state.trailer.images.maximum_image_url}
        className="w-screen h-[100%] object-cover object-center fixed"
      />

      <div className="bg-white w-screen min-h-[20vw] relative top-[25vw] pb-[20vh]">
        <div className="relative">
          <img
            src={location.state.images.jpg.large_image_url}
            className="absolute w-[15vw] h-[20vw] -top-[6vw] left-[10vw] rounded-lg shadow-lg shadow-black"
          />
          <button className="absolute left-[10vw] top-[15.5vw] text-md bg-blue-400 px-[4.2vw] h-[4vh] rounded-sm text-white">Add to list</button>
          <button className="absolute left-[23vw] top-[15.5vw] text-md bg-red-400 px-[0.6vw] h-[4vh] rounded-sm text-white"><AiFillHeart /></button>

        </div>
        <div className="ml-[28vw] top-[2vw] relative">
          <h1 className="text-2xl">{location.state.title}</h1>
          <p className="w-[50vw] text-sm mt-2">{location.state.synopsis}</p>
        </div>
      </div>

      <div className="w-screen h-screen bg-sky-100 relative top-[25vw]"></div>
    </div>
  );
};

export default Anime;

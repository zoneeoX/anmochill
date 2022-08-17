import React from "react";
import { useLocation } from "react-router-dom";

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
      <div className="bg-white w-screen min-h-screen max-h-full relative top-[25vw]">
        <img
          src={location.state.images.jpg.large_image_url}
          className="absolute w-[15vw] h-[20vw] -top-[4vw] left-[2vw] rounded-lg shadow-lg shadow-black"
        />
        <div className="ml-[20vw] top-[2vw] relative">
          <h1 className="text-2xl">{location.state.title}</h1>
          <p className="w-[50vw] text-sm mt-2">{location.state.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Anime;

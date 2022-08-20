import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Anime = () => {
  const location = useLocation();
  const [selectedAnime, setSelectedAnime] = useState([])
  /**
   *
   * * favorite through this component by extracting the mal id (searching in the api) and then push it into an array in a slice (store)
   * ! theoritical
   *
   * * Another way is to grab the index from the the "currently(index)" and then search itemList through the index and then push it in a slice (store)
   * ! theoritical
   */

  /**
   * * TITLE, SYNOPSIS, TRAILER, IMAGES
   */

  const seasonNow = useSelector((store) => store.trending);
  const upcoming = useSelector((store) => store.upcoming);
  const top = useSelector((store) => store.top);

  const { itemList } = seasonNow;
  const { upcomingList } = upcoming;
  const { topList } = top;

  let currentIndex = location.state.currently - 1;
  let isRoutes = location.state.navRoutes;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  async function addToList() {
    // alt routes is to just dispatch and then push it  
    switch (isRoutes) {
      case "trending":
        setSelectedAnime(itemList[currentIndex]);
        break;
      case "upcoming":
        setSelectedAnime(upcomingList[currentIndex]);
        break;
      case "top":
        setSelectedAnime(topList[currentIndex]);
        break;
    }
  } 

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
          <button className="absolute left-[10vw] top-[15.5vw] text-md bg-blue-400 px-[4.2vw] h-[4vh] rounded-sm text-white" onClick={() => addToList()}>
            Add to list
          </button>
          <button className="absolute left-[23vw] top-[15.5vw] text-md bg-red-400 px-[0.6vw] h-[4vh] rounded-sm text-white">
            <AiFillHeart />
          </button>
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

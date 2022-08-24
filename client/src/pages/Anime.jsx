import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchFavorite } from "../features/complexfeatures/Add";

const Anime = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectedAnime, setSelectedAnime] = useState([]);
  const [isUser, setIsUser] = useState(Boolean);
  /**
   *
   * * favorite through this component by extracting the mal id (searching in the api) and then push it into an array in a slice (store)
   * ! theoritical
   *
   * * Another way is to grab the index from the the "currently(index)" and then search itemList through the index and then push it in a slice (store) || this method is being used
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
  const searchList = location.state.anime;

  let currentIndex = location.state.currently - 1;
  let isRoutes = location.state.navRoutes;

  useEffect(() => {
    let currentUser = localStorage.getItem("token");
    currentUser ? setIsUser(true) : setIsUser(false);
    window.scrollTo(0, 0);
  }, []);

  async function addToList() {
    /**
     * * there is 2 way we can do this
     * ? one is through the backend where we can receive its selected anime
     */

    try {
      if (isUser) {
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
          case "search":
            setSelectedAnime(searchList[currentIndex + 1]);
            /**
             * ! 'Search' is not detected becausue it cant extract from different pages (possibly conflict between 2 sides of the road joining into one) causing overlapping
             * ! ^ problem above has been solved not because it conflict but just a writing error
             * ? the solution can possible by creating a slice that contain all the different routes 8/22/2022
             * * FIXED IT BY JUST CHANGING THE PROPS FROM 'navRoutes:['{currentRoutes}']' TO 'navRoutes:'CurrentRoutes''
             */
            break;
        }

        alert("Successfully added");
      } else {
        return alert("You are not logged in!");
      }
    } catch (err) {
      console.log({ message: "Something went wrong", err });
    }
  }

  async function sendToBackend() {
    try {
      dispatch(fetchFavorite(selectedAnime)); 
      console.log(selectedAnime)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    sendToBackend();
  }, [selectedAnime]);

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
          <button
            className="absolute left-[10vw] top-[15.5vw] text-md bg-blue-400 px-[5.5vw] h-[4vh] rounded-lg text-white"
            onClick={() => {
              addToList();
            }}
          >
            Add to list
          </button>
          {/* <button className="absolute left-[23vw] top-[15.5vw] text-md bg-red-400 px-[0.6vw] h-[4vh] rounded-sm text-white">
            <AiFillHeart />
          </button> */}
        </div>
        <div className="ml-[28vw] top-[2vw] relative">
          <h1 className="text-4xl font-exo font-medium">
            {location.state.title}
          </h1>
          <p className="w-[50vw] text-md mt-2 font-josef">
            {location.state.synopsis}
          </p>
        </div>
      </div>

      <div className="w-screen h-screen bg-sky-100 relative top-[25vw]"></div>
    </div>
  );
};

export default Anime;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getId } from "../features/search/searchIdSlice";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Anime = () => {
  // const location = useLocation();
  const dispatch = useDispatch();
  // const navigate = useNavigate()

  const { id } = useParams();

  const [openModal, setOpenModal] = useState(Boolean);

  // const [selectedAnime, setSelectedAnime] = useState([]);
  // const [isUser, setIsUser] = useState(Boolean);
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

  // const multi = useSelector((store) => store.multiple);
  // const top = useSelector((store) => store.top);
  const { currentAnime, isLoading, isSuccess, isError, message } = useSelector(
    (store) => store.searchId
  );
  const { user } = useSelector((store) => store.auth);

  // const { topList } = top;
  // const { animeList } = multi;

  // const searchList = location.state.anime;

  // let currentIndex = location.state.currently - 1;
  // let isRoutes = location.state.navRoutes;

  useEffect(() => {
    dispatch(getId(id));
    window.scrollTo(0, 0);
  }, []);

  /**
   * * 1. liat parameter idnya
   * * 2. masukin id ke dalem dispatch(animesearch(idnya))
   * * 3. masukin animenya kedalem currentanime
   * * 4. useSelect disini terus masukin dalem api(add)
   */

  // async function addToList() {
  //   /**
  //    * * there is 2 way we can do this
  //    * ? one is through the backend where we can receive its selected anime
  //    */

  //   try {
  //     if (isUser) {
  //       switch (isRoutes) {
  //         case "Trending":
  //           setSelectedAnime(animeList[0]["Trending"][currentIndex]);
  //           break;
  //         case "Upcoming":
  //           setSelectedAnime(animeList[0]["Upcoming"][currentIndex]);
  //           break;
  //         case "Top":
  //           setSelectedAnime(topList[currentIndex]);
  //           break;
  //         case "search":
  //           setSelectedAnime(searchList[currentIndex + 1]);
  //           /**
  //            * ! 'Search' is not detected becausue it cant extract from different pages (possibly conflict between 2 sides of the road joining into one) causing overlapping
  //            * ! ^ problem above has been solved not because it conflict but just a writing error
  //            * ? the solution can possible by creating a slice that contain all the different routes 8/22/2022
  //            * * FIXED IT BY JUST CHANGING THE PROPS FROM 'navRoutes:['{currentRoutes}']' TO 'navRoutes:'CurrentRoutes''
  //            */
  //           break;
  //       }

  //       alert("Successfully added");
  //     } else {
  //       return alert("You are not logged in!");
  //     }
  //   } catch (err) {
  //     console.log({ message: "Something went wrong", err });
  //   }
  // }

  // async function sendToBackend() {
  //   try {
  //     dispatch(fetchFavorite(selectedAnime));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   sendToBackend();
  // }, [selectedAnime]);

  // useEffect(() => {
  //   var filtered = favoriteList.filter(function (el) {
  //     return el !== "";
  //   });

  //   setFilteredFav(filtered);
  //   dispatch(filteredFavorite(filtered));
  // }, [selectedAnime]);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);

    // dispatch(addAnime(selectedAnime));
    // setSelectedAnime([]);
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <AnimatePresence>
        {openModal && <Modal setOpenModal={setOpenModal} />}
      </AnimatePresence>

      <form
        className="bg-sky-100 w-screen min-h-screen max-h-full"
        onSubmit={onSubmit}
      >
        <img
          src={currentAnime.trailer?.images.maximum_image_url}
          className="w-screen h-[100%] object-cover object-center fixed"
        />

        <motion.div
          className="bg-white w-screen min-h-[20vw] relative top-[25vw] pb-[20vh]"
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{duration: 0.4}}
        >
          <div className="relative">
            <img
              src={currentAnime.images?.jpg.large_image_url}
              className="absolute w-[15vw] h-[20vw] -top-[6vw] left-[10vw] rounded-lg shadow-lg shadow-black"
            />

            <button className="absolute left-[10vw] top-[15.5vw] w-[15vw] text-md bg-blue-400 px-[5.5vw] h-[4vh] rounded-lg text-white">
              Add to List
            </button>

            {/* <button className="absolute left-[23vw] top-[15.5vw] text-md bg-red-400 px-[0.6vw] h-[4vh] rounded-sm text-white">
            <AiFillHeart />
          </button> */}
          </div>
          <div className="ml-[28vw] top-[2vw] relative">
            <h1 className="text-4xl font-exo font-medium">
              {currentAnime.title}
            </h1>
            <p className="w-[50vw] text-md mt-2 font-josef">
              {currentAnime.synopsis}
            </p>
          </div>
        </motion.div>

        <div className="w-screen h-screen bg-sky-100 relative top-[25vw]"></div>
      </form>
    </>
  );
};

export default Anime;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserAnime, reset } from "../features/add/addSlice";
import Spinner from "../components/Spinner";
import AnimeLibraryCard from "../components/AnimeLibraryCard";
import EditModal from "../components/EditModal";
import { AiOutlineArrowDown } from "react-icons/ai";
import { TabTitle } from "../components/DynamicTitle";

const Library = () => {
  const { user } = useSelector((store) => store.auth);
  TabTitle(`${user.name}'s Library ・ Anmochill`);
  
  const { addedAnime, isLoading, isError, message } = useSelector(
    (store) => store.add
  );
  const [openModal, setOpenModal] = useState(Boolean);
  const [statusFilter, setStatusFilter] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  var filteredList = addedAnime.filter((item, i) => {
    if (statusFilter === "") {
      return item;
    } else {
      return item.currentStatus === statusFilter;
    }
  });

  var countFilteredPlanWatched = addedAnime.filter((item, i) => {
    return item.currentStatus === "planned";
  });

  var countFilteredWatching = addedAnime.filter((item, i) => {
    return item.currentStatus === "watching";
  });

  var countFilteredCompleted = addedAnime.filter((item, i) => {
    return item.currentStatus === "completed";
  });

  var countFilteredDropped = addedAnime.filter((item, i) => {
    return item.currentStatus === "dropped";
  });

  const handleClick = (e) => {
    setStatusFilter(e.target.name);
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getUserAnime());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);



  return (
    <>
      <div className="w-screen min-h-screen max-h-full bg-sky-100 flex flex-row justify-center items-start p-10 pt-[35vh]">
        <div className="w-[10vw] min-h-0 max-h-full pr-10">
          <div className="flex flex-col items-start font-josef group">
            <p className="text-sm text-gray-400">Lists</p>
            <button
              className="px-2 py-1 w-full hover:bg-white/50 flex flex-row justify-between transition-all duration-150"
              name=""
              onClick={handleClick}
            >
              All{" "}
              <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-75 transition-all duration-150">
                {addedAnime.length}
              </p>
            </button>
            <button
              className="px-2 py-1 w-full hover:bg-white/50 flex flex-row justify-between transition-all duration-150"
              name="planned"
              onClick={handleClick}
            >
              Plan to watch{" "}
              <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-75 transition-all duration-150">
                {countFilteredPlanWatched.length}{" "}
              </p>
            </button>
            <button
              className="px-2 py-1 w-full hover:bg-white/50 flex flex-row justify-between transition-all duration-150"
              name="watching"
              onClick={handleClick}
            >
              Watching{" "}
              <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-75 transition-all duration-150">
                {" "}
                {countFilteredWatching.length}
              </p>
            </button>
            <button
              className="px-2 py-1 w-full hover:bg-white/50 flex flex-row justify-between transition-all duration-150"
              name="completed"
              onClick={handleClick}
            >
              Completed
              <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-75 transition-all duration-150">
                {countFilteredCompleted.length}
              </p>
            </button>
            <button
              className="px-2 py-1 w-full hover:bg-white/50 flex flex-row justify-between transition-all duration-150"
              name="dropped"
              onClick={handleClick}
            >
              Dropped{" "}
              <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-75 transition-all duration-150">
                {countFilteredDropped.length}
              </p>
            </button>
          </div>

          {/* <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-400">Filter</p>

            <div className="px-2 w-full bg-white border-0 h-[4vh] py-2 rounded cursor-pointer font-josef flex justify-between items-center">
              <p className="text-sm opcity-50 text-gray-400">Format</p>
              <i className="text-sm opcity-50 text-gray-400 mb-[0.2vh]">
                <AiOutlineArrowDown />
              </i>
            </div>
          </div>
          <div>
            <div className="px-2 w-full bg-white border-0 h-[4vh] py-2 rounded cursor-pointer font-josef flex justify-between items-center mt-2">
              <p className="text-sm opcity-50 text-gray-400">Score</p>
              <i className="text-sm opcity-50 text-gray-400 mb-[0.2vh]">
                <AiOutlineArrowDown />
              </i>
            </div>
          </div> */}
        </div>
        <div>
          <div className="bg-white w-[60vw] h-[7vh] flex flex-row px-[6vw] justify-between text-md font-exo text-slate-600 font-semibold py-5">
            <h1 className="text-2xl capitalize w-[18vw]">
              {user?.name}'s Library
            </h1>
          </div>
          <div className="bg-white w-[60vw] min-h-fit max-h-full rounded">
            {filteredList.length >= 1 ? (
              <div>
                {filteredList.map((anime, i) => (
                  <AnimeLibraryCard anime={anime} i={i} key={anime?._id} />
                ))}
              </div>
            ) : (
              <h1 className="m-auto w-fit text-2xl font-semibold font-exo p-[10vw] text-gray-500 opacity-50 select-none">Your library is empty. </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;

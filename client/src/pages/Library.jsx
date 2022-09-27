import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserAnime, reset } from "../features/add/addSlice";
import Spinner from "../components/Spinner";
import AnimeLibraryCard from "../components/AnimeLibraryCard";

const Library = () => {
  const { user } = useSelector((store) => store.auth);
  const { addedAnime, isLoading, isError, message } = useSelector(
    (store) => store.add
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-screen min-h-screen max-h-full bg-sky-100 flex flex-col justify-center items-center">
      <div className="bg-white w-[60vw] h-[7vh] flex flex-row px-[6vw] justify-between text-md font-exo text-slate-600 font-semibold py-5">
        <h1 className="text-2xl capitalize">{user.name}'s Library</h1>
      </div>
      <div className="bg-white w-[60vw] min-h-0 max-h-full">
        {addedAnime.length > 0 ? (
          <div>
            {addedAnime.map((anime, key) => (
              <AnimeLibraryCard anime={anime} />
            ))}
          </div>
        ) : (
          <h1>Yo do not have any goals</h1>
        )}
      </div>
    </div>
  );
};

export default Library;

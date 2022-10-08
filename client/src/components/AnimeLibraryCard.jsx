import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EditModal from "./EditModal";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillStar } from "react-icons/ai";

const AnimeLibraryCard = ({ anime, i }) => {
  const navigate = useNavigate("");
  const organizedTitle = anime?.currentAnime?.title.replace(/\s+/g, "-");
  const { addedAnime } = useSelector((store) => store.add);
  const [openModal, setOpenModal] = useState(Boolean);
  const [isPicture, setIsPicture] = useState(Boolean);

  const animeEpisode = addedAnime[i].currentAnime?.episodes;
  const animeId = addedAnime[i].currentAnime?.mal_id;
  //kalo status nya watch berarti component watch akan tertampil di different category

  return (
    <>
      <AnimatePresence>
        {openModal && (
          <EditModal setOpenModal={setOpenModal} anime={anime} i={i} />
        )}
      </AnimatePresence>

      <div
        className="flex flex-row px-10 font-josef text-md p-4 gap-10 hover:bg-purple-400 transition-all duration-200 hover:text-white items-center group"
        onMouseOver={() => setIsPicture(true)}
        onMouseOut={() => setIsPicture(false)}
      >
        {isPicture && (
          <img
            src={anime?.currentAnime?.images.jpg.large_image_url}
            className="absolute w-[6vw] left-[18vw] shadow-black shadow-md rounded"
          />
        )}

        <div className="flex flex-row gap-4 items-center">
          <div
            className="bg-purple-600 w-[2vw] h-[2vw] hidden group-hover:block cursor-pointer transition-all duration-200"
            onClick={() => setOpenModal(true)}
          >
            <div className="flex flex-row h-full gap-1 justify-center items-center">
              <div className="w-[0.4vh] rounded-full bg-white h-[0.4vh]" />
              <div className="w-[0.4vh] rounded-full bg-white h-[0.4vh]" />
              <div className="w-[0.4vh] rounded-full bg-white h-[0.4vh]" />
            </div>
          </div>
          <img
            src={anime?.currentAnime?.images.jpg.large_image_url}
            className="w-[2vw] h-[2vw] object-cover object-center group-hover:hidden"
          />
          <div
            className="w-[200px] cursor-pointer"
            onClick={() =>
              navigate(`/anime/${anime?.currentAnime.mal_id}/${organizedTitle}`)
            }
          >
            {anime?.currentAnime?.title}
          </div>
        </div>
        <div className="capitalize items-center justify-center w-[10vw]">
          {anime?.currentStatus}
        </div>
        <div className="w-[10vw]">
          {anime?.episode} / {animeEpisode === null ? " ? " : animeEpisode}
        </div>
        <div className="flex flex-row text-yellow-600 gap-2">
          {" "}
          {Array(Number(anime?.score))
            .fill(0)
            .map((items, i) => {
              return <AiFillStar />;
            })}
        </div>
      </div>
    </>
  );
};

export default AnimeLibraryCard;

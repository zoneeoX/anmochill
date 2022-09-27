import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditModal from "./EditModal";

const AnimeLibraryCard = ({ anime, i }) => {
  const navigate = useNavigate("");
  const organizedTitle = anime.status.currentAnime?.title.replace(/\s+/g, "-");
  const [openModal, setOpenModal] = useState(Boolean)

  return (
    <>
      {openModal && (
        <EditModal setOpenModal={setOpenModal} currentAnime={anime} i={i} />
      )}

      <div className="flex flex-row px-10 font-josef text-md p-4 gap-10 hover:bg-sky-400/50 justify-between items-center group">
        <div className="flex flex-row gap-4 items-center">
          <div className="bg-blue-400 w-[3vw] h-[4.4vw] hidden group-hover:block cursor-pointer" onClick={() => setOpenModal(true)}></div>
          <img
            src={anime.status.currentAnime?.images.jpg.large_image_url}
            className="w-[3vw] group-hover:hidden"
          />
          <div className="w-[18vw]">{anime.status.currentAnime?.title}</div>
        </div>
        <div className="capitalize items-center justify-center">
          {anime.status.status}
        </div>
        <div className="">{anime.status.episode}</div>
        <div className="">{anime.status.currentAnime?.type}</div>
      </div>
    </>
  );
};

export default AnimeLibraryCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const AnimeLibraryCard = ({ anime }) => {
    const navigate = useNavigate('')


  return (
    <div className="flex flex-row px-10 font-josef text-md p-4 gap-10 hover:bg-sky-400/50 justify-between items-center">
      <div className="flex flex-row gap-4 items-center">
        <img
          src={anime.status.currentAnime?.images.jpg.large_image_url}
          className="w-[3vw]"
        />
        <div className="w-[18vw]">{anime.status.currentAnime?.title}</div>
      </div>
      <div className="capitalize items-center justify-center">
        {anime.status.status}
      </div>
      <div className="">{anime.status.episode}</div>
      <div className="">{anime.status.currentAnime?.type}</div>
    </div>
  );
};

export default AnimeLibraryCard;
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const Information = ({currentAnime}) => {
  return (
    <div className="flex md:flex-row flex-col-reverse ml-[1vw] relative">
      <div className="flex justify-center ml-[4vw] text-start mt-10 md:w-fit w-[78vw] pr-10 md:pr-0 m-auto flex-col z-40">
        <h1 className="bg-rose-600 text-white min-h-fit max-h-full py-5 px-10 rounded-lg font-exo flex flex-row gap-2 items-center hover:scale-110 duration-200">
          <AiFillStar /> {currentAnime.score || "No"} Scores
        </h1>
        <h2 className="bg-rose-600 text-white min-h-fit max-h-full py-5 px-10 rounded-lg my-5 font-exo flex flex-row gap-2 items-center hover:scale-110 duration-200">
          <BsFillPeopleFill /> {currentAnime.members || "No"} Members
        </h2>

        <div className="flex flex-col bg-white max-h-full py-2 px-10 rounded-lg min-h-[80vh] justify-evenly">
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Episodes
            <p className="text-lg text-black/50">{currentAnime.episodes || 0}</p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Duration
            <p className="text-lg text-black/50">{currentAnime.duration}</p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Status
            <p className="text-lg text-black/50">{currentAnime.status}</p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Start & End Date
            <p className="text-lg text-black/50">{currentAnime.aired?.string}</p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Season
            <p className="text-lg text-black/50 capitalize">
              {currentAnime.season || "Unkown Season"}
            </p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Popularity
            <p className="text-lg text-black/50">{currentAnime.popularity}</p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Favorites
            <p className="text-lg text-black/50">{currentAnime.favorites}</p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Studios
            <p className="text-lg text-black/50">
              {currentAnime
                ? currentAnime.studios?.map((stud) => stud.name +' ,')
                : "No Studios"}
            </p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500 w-[10vw]">
            Producers
            <p className="text-lg text-black/50">
              {currentAnime
                ? currentAnime?.producers?.map(
                    (prod) => prod.name + ", " || "Unknown Producers"
                  )
                : "No Producers"}
            </p>
          </h2>
          <h2 className="text-xl flex flex-col gap-0 font-josef text-blue-500">
            Source
            <p className="text-lg text-black/50">{currentAnime.source}</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Information;

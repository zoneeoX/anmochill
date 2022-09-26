import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Animecard = ({
  title,
  genres,
  episodes,
  aired,
  score,
  images,
  season,
  studios,
  type,
  mal_id,
  trailer,
  synopsis,

  currently,
  navRoutes,
}) => {
  /**
   * ! deprecate method
   * 
   * const [inViewRef, isFullyInView] = useInView({
    threshold: 0.9,
  });
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (isFullyInView === false) {
      setTest(false);
    }
    console.log(current);
  }, []);
   */

  const organizedTitle = title.replace(/\s+/g, "-");
  const navigate = useNavigate();

  return (
    <div
      className="flex group mt-4 cursor-pointer"
      onClick={() =>
        navigate(`/anime/${navRoutes}/${mal_id}/${organizedTitle}/`)
      }
    >
      <div>
        <div className="relative group">
          <div className="absolute bg-gradient-to-b from-transparent via-black/0 to-black/0 group-hover:via-black/50 group-hover:to-black/50 w-full h-[15vw] opacity-0 group-hover:opacity-100 duration-500 transition-all justify-center flex items-center rounded-lg">
            <h1 className="text-white text-md font-josef text-center p-2">
              {title}
            </h1>
          </div>
        </div>
        <img
          src={images.jpg.large_image_url}
          className="w-[10vw] h-[15vw] rounded-lg"
        />
        <h2 className="truncate w-[10vw] text-gray-600 font-semibold group-hover:text-blue-500 font-exo">
          {title}
        </h2>
      </div>

      <div
        className={`relative ease-in-out duration-500 transition-all right-[10vw] opacity-0 group-hover:right-0 group-hover:opacity-100 font-josef`}
      >
        <div
          className={`
          ${
            currently % 6 === 0
              ? "right-[11.5vw] before:bg-slate-700 before:rotate-45 before:translate-y-[2vw] before:w-[20%] before:h-[10%] before:absolute before:-z-10 z-10 before:-right-[4%]"
              : "left-[1vw] before:bg-slate-700 before:rotate-45 before:translate-y-[4vw] before:w-[20%] before:h-[10%] before:absolute before:-z-10 z-10 before:-left-[4%]"
          }
          absolute bg-slate-700 min-w-[14vw] max-w-fit min-h-[8vw] max-h-fit text-white p-5 rounded-lg select-none pointer-events-none shadow-lg shadow-black}`}
        >
          <div className="flex flex-col capitalize text-md">
            <h2 className="flex flex-row gap-2 text-lg">
              {season} <p>{aired.string}</p>
            </h2>

            <div className="mt-2">
              <h1 className={`${"text-yellow-400"}`}>{studios[0]?.name} </h1>

              <div className="flex flex-row">
                <h2>{type || "TV "}</h2>&nbsp;
                <h2>
                  {episodes === null ? "" : " • " + episodes + " Episodes"}
                </h2>
              </div>
            </div>

            <div className="flex flex-row gap-2 mt-5">
              {genres.map((item, i) => (
                <h3
                  className={`${
                    genres.length === 3
                      ? "bg-yellow-600"
                      : genres.length === 4
                      ? "bg-rose-400"
                      : genres.length < 3
                      ? "bg-blue-600"
                      : "bg-purple-700"
                  } px-2 min-w-fit max-w-full text-sm rounded-full`}
                  key={i}
                >
                  {item.name}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/**
       * * make it look like disney but it looks boring
       */
      /* <div className="relative">
        <div className="absolute">
            <h1>{title}</h1>

        </div>
      </div> */}
    </div>
  );
};

export default Animecard;

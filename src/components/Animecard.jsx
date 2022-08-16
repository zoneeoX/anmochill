import React from "react";

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
}) => {

  return (
    <div className="flex flex-row gap-4 group">
      <div>
        <img
          src={images.jpg.large_image_url}
          className="w-[10vw] h-[15vw] rounded-lg"
        />
        <h2 className="truncate w-[10vw] text-gray-600 font-semibold group-hover:text-blue-500">
          {title}
        </h2>
      </div>

      <div className="relative hidden group-hover:block">
        <div className="absolute bg-slate-700 min-w-[14vw] max-w-fit min-h-[8vw] max-h-fit text-white p-5 rounded-lg select-none pointer-events-none">
          <div className="flex flex-col capitalize text-md">
            <h2 className="flex flex-row gap-2 text-lg">
              {season} <p>{aired.string}</p>
            </h2>

            <div className="mt-2">
              <h1 className={`${"text-yellow-400"}`}>{studios[0].name} </h1>

              <div className="flex flex-row">
                <h2>{type || "TV "}</h2>&nbsp;
                <h2>
                  {episodes === null ? "" : " • " + episodes + " Episodes"}
                </h2>
              </div>
            </div>

            <div className="flex flex-row gap-2 mt-5">
              {genres.map((item) => (
                <h3
                  className={`${
                    genres.length === 3
                      ? "bg-yellow-600"
                      : genres.length === 4
                      ? "bg-rose-400"
                      : genres.length < 3
                      ? "bg-blue-600"
                      : "bg-purple-700"
                  } px-2 text-sm rounded-full`}
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

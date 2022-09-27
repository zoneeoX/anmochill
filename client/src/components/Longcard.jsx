import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Longcard = ({
  title,
  genres,
  images,
  mal_id,
  trailer,
  synopsis,
  number,
  navRoutes,
  current
}) => {


  const navigate = useNavigate()
  const [currently, setCurrently] = useState(current + 1)


  const organizedTitle = title.replace(/\s+/g, '-');

  return (
    <div className="gap-4 flex flex-col px-[0.5vw] justify-center rounded-lg cursor-pointer">
      <div
        className="flex flex-row gap-4 mx-[10vw] h-[5vw] items-center"
        onClick={() =>
          navigate(`anime/${mal_id}/${organizedTitle}`, {
            state: {
              title,
              synopsis,
              trailer,
              images,
              navRoutes,
              currently
              },
          })
        }
      > 
        <h1 className="text-gray-400 font-bold text-2xl">#{number + 1}</h1>
        <div className="bg-white flex flex-row w-full pl-4 py-2 items-center">
          <img src={images.jpg.large_image_url} className="w-[3vw] h-[4vw]" />
          <div className="flex flex-col ml-4">
            <h1>{title}</h1>

            <div className="flex flex-row gap-2">
              {genres.map((item, i) => (
                <h2
                  key={i}
                  className={`${
                    genres.length === 3
                      ? "bg-rose-400"
                      : genres.length === 4
                      ? "bg-blue-400"
                      : genres.length === 6
                      ? "bg-fuchsia-400"
                      : genres.length >= 4
                      ? "bg-yellow-400"
                      : "bg-orange-400"
                  } px-2 rounded-full text-white text-sm mt-2`}
                >
                  {item.name}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Longcard;

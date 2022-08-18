import React from "react";
import { useSelector } from "react-redux";
import Animecard from "../components/Animecard";

const UpcomingPage = () => {
  const selected = useSelector((store) => store.upcoming);
  const { upcomingList } = selected;
  const navRoutes = ['trending', 'upcoming']


  return (
    <div className="w-screen min-h-screen max-h-full bg-sky-100 py-10">
      <h1 className="mx-[10vw] mb-[5vw] text-4xl pt-[10vw] font-bold text-gray-600">
        Upcoming Season.
      </h1>
      <div className="grid grid-cols-6 gap-10 mx-[10vw]">
        {upcomingList.map(
          (
            {
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
            },
            i
          ) => (
            <Animecard
              title={title}
              genres={genres}
              episodes={episodes}
              aired={aired}
              score={score}
              images={images}
              season={season}
              studios={studios}
              trailer={trailer}
              synopsis={synopsis}
              type={type}
              mal_id={mal_id}
              navRoutes={navRoutes[1]}
              current={i}
              key={i}
            />
          )
        )}
      </div>
    </div>
  );
};

export default UpcomingPage;

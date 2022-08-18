import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Animecard from "../components/Animecard";

const TrendingPage = () => {
  let navigate = useNavigate()
  const selected = useSelector((store) => store.trending);
  const { itemList } = selected;
  const navRoutes = ['trending', 'upcoming']

  //check for Navigation Timing API support
// if (window.performance) {
//   console.info("window.performance works fine on this browser");
// }
// console.info(performance.navigation.type);
// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//   navigate('/')
//   console.info( "This page is reloaded" );

// } else {
//   console.info( "This page is not reloaded");
// }

  return (
    <div className="w-screen min-h-screen max-h-full bg-sky-100 py-10">
      
      <h1 className="mx-[10vw] mb-[5vw] text-4xl pt-[10vw] font-bold text-gray-600">
        This Season.
      </h1>
      <div className="grid grid-cols-6 gap-10 mx-[10vw]">
        {itemList.map(
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
              navRoutes={navRoutes[0]}
              current={i}
              key={i}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TrendingPage;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Animecard from "../components/Animecard";
import Cardskeleton from "../components/Cardskeleton";
import { multipleFetch } from "../features/MultipleAxiosFeature";
import { TabTitle } from "../components/DynamicTitle";

const UpcomingPage = () => {

  TabTitle("Upcoming Anime ・ Anmochill");



  const multi = useSelector((store) => store.multiple);
  const { animeList, isLoadingCard } = multi;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(multipleFetch());
  }, [dispatch]);

  return (
    <div className="w-screen min-h-screen max-h-full bg-sky-100 py-10">
      <h1 className="mx-[10vw] mb-[5vw] text-4xl pt-[10vw] font-bold text-gray-600">
        Upcoming Season.
      </h1>

      {isLoadingCard ? (
        <Cardskeleton />
      ) : (
        <div className="grid grid-cols-6 gap-10 mx-[10vw]">
          {animeList.length > 0 &&
            animeList[0]["Upcoming"].map(
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
                  navRoutes={"Upcoming"}
                  currently={i + 1}
                  key={i}
                />
              )
            )}
        </div>
      )}
    </div>
  );
};

export default UpcomingPage;

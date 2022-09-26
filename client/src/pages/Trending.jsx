import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Animecard from "../components/Animecard";
import Animecontainer from "../components/Animecontainer";

import { fetchTopAnime } from "../features/Top";
import LongcardContainer from "../components/LongcardContainer";
import Longcard from "../components/Longcard";
import { multipleFetch } from "../features/MultipleAxiosFeature";
import Cardskeleton from "../components/Cardskeleton";
import LongcardSkeleton from "../components/LongcardSkeleton";

const Trending = () => {
  const top = useSelector((store) => store.top);
  const multi = useSelector((store) => store.multiple);

  const { topList, isLoading } = top;
  const { animeList } = multi;

  // --------------------------------------------

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopAnime());
    dispatch(multipleFetch());
  }, [dispatch]);

  const returnKeys = Object.keys; // this return key from object

  return (
    <div className="w-screen min-h-screen max-h-full bg-sky-100 flex flex-col gap-10 py-[4vw]">
      {isLoading ? (
        <Cardskeleton />
      ) : (
        animeList?.map((item) => {
          return returnKeys(item)?.map((key, i) => {
            return (
              <Animecontainer
                type={key}
                to={key === "Trending" ? "/anime/Trending" : "/anime/Upcoming"}
                key={i}
              >
                {item[key]
                  .slice(0, -19)
                  .map(
                    (
                      {
                        title,
                        genres,
                        episodes,
                        aired,
                        score,
                        images,
                        synopsis,
                        mal_id,
                        studios,
                        trailer,
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
                        studios={studios}
                        synopsis={synopsis}
                        mal_id={mal_id}
                        trailer={trailer}
                        key={i}
                      />
                    )
                  )}
              </Animecontainer>
            );
          });
        })
      )}

      {isLoading ? (
        <LongcardSkeleton />
      ) : (
        <LongcardContainer>
          {topList
            .slice(0, -15)
            .map(
              (
                {
                  title,
                  genres,
                  episodes,
                  aired,
                  score,
                  images,
                  synopsis,
                  mal_id,
                  studios,
                  trailer,
                },
                i
              ) => (
                <Longcard
                  title={title}
                  genres={genres}
                  episodes={episodes}
                  aired={aired}
                  score={score}
                  images={images}
                  studios={studios}
                  synopsis={synopsis}
                  mal_id={mal_id}
                  number={i}
                  trailer={trailer}
                  key={i}
                />
              )
            )}
        </LongcardContainer>
      )}
    </div>
  );
};

export default Trending;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Animecard from "../components/Animecard";
import Animecontainer from "../components/Animecontainer";

import { fetchTrending } from "../features/TrendingFeatures";
import { fetchUpcomingSeason } from "../features/UpcomingSeason";
import { fetchTopAnime } from "../features/Top";
import LongcardContainer from "../components/LongcardContainer";
import Longcard from "../components/Longcard";

const Trending = () => {
  /**
     * * This was used but it was migrated, now it is stored in redux
     * ! though it made the code "LOOKS" more complicated but really.. it easen the reader to read this code
     * const fetchAnime = async () => {
        const options = {
            baseUrl: 'https://api.jikan.moe/v4',
            params: '/seasons/now'
        }
 
        
        await axios.request(options.baseUrl + options.params).then(function (response) {
            console.log(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
 
    useEffect(() => {
        fetchAnime()
    }, [])
     * 
     * 
     */

  // --------------------------------------------
  /**
   * * alternative method but more cleaner
   * * using useselector it grabs everything in that "feature"
   */
  const seasonNow = useSelector((store) => store.trending);
  const upcoming = useSelector((store) => store.upcoming);
  const top = useSelector((store) => store.top);

  const { itemList, isError, isLoading } = seasonNow;
  const { upcomingList } = upcoming;
  const { topList } = top;
  console.log(upcomingList);

  // --------------------------------------------

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchUpcomingSeason());
    dispatch(fetchTopAnime());
  }, [dispatch]);

  return (
    <div className="w-screen min-h-screen max-h-full bg-sky-100 flex flex-col gap-10">
      <Animecontainer type={"This Season."} to={"/trending"}>
        {itemList
          ?.slice(0, -19)
          .map(({ title, genres, episodes, aired, score, images, season, studios, type, mal_id }, i) => (
            <Animecard
              title={title}
              genres={genres}
              episodes={episodes}
              aired={aired}
              score={score}
              images={images}
              season={season}
              studios={studios}
              type={type}
              mal_id={mal_id}
              current={i}
              key={i}
            />
          ))}
      </Animecontainer>
      <Animecontainer type={"Upcoming Season."} to={"/upcoming"}>
        {upcomingList
          ?.slice(0, -19)
          .map(({ title, genres, episodes, aired, score, images, studios, mal_id }, i) => (
            <Animecard
              title={title}
              genres={genres}
              episodes={episodes}
              aired={aired}
              score={score}
              images={images}
              studios={studios}
              mal_id={mal_id}
              current={i}
              key={i}
            />
          ))}
      </Animecontainer>
      <LongcardContainer>
        {topList.slice(0, -15).map(({ title, genres, episodes, aired, score, images }, i) => (
          <>
          <Longcard
            title={title}
            genres={genres}
            episodes={episodes}
            aired={aired}
            score={score}
            images={images}
            number={i}
            key={i}
          />
          </>
        ))}
      </LongcardContainer>
    </div>
  );
};

export default Trending;

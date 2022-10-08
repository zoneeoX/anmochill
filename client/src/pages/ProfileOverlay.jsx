import React, { useEffect, useState } from "react";
import { getOtherAnime, getUserAnime, reset } from "../features/add/addSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TabTitle } from "../components/DynamicTitle";
import { AiFillStar } from "react-icons/ai";

const ProfileOverlay = () => {
  const { user } = useSelector((store) => store.auth);
  const [average, setAverage] = useState(Number);
  const [watchAverage, setWatchAverage] = useState(Number);
  const [totalEpisodes, setTotalEpisodes] = useState(Number);
  const [isShowMore, setIsShowMore] = useState(false);

  const { username } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { addedAnime, isLoading, isError, message } = useSelector(
    (store) => store.add
  );

  TabTitle(`${username}'s Profile ・ Anmochill`);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) { 
      navigate("/login");
    }
    // dispatch(getUserAnime());

    dispatch(getOtherAnime({username}))

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch, username]);

  let animeLength = addedAnime.length;
  const animeTvDuration = 19;

  const averageScore = async () => {
    let totalAverage = [];

    await addedAnime.map((item, i) => {
      return totalAverage.push(Number(item.score));
    });

    var sum = await totalAverage.reduce(function (a, b) {
      return a + b;
    }, 0);

    setAverage(sum / animeLength);
  };

  const averageWatchTime = async () => {
    let totalAverage = [];

    await addedAnime.map((item, i) => {
      return totalAverage.push(Number(item.episode));
    });

    var sum = await totalAverage.reduce(function (a, b) {
      return a + b;
    }, 0);

    setWatchAverage((sum * animeTvDuration) / 60);
  };

  const totalEpisodeWatched = async () => {
    let totalEpisode = [];

    await addedAnime.map((item, i) => {
      return totalEpisode.push(Number(item.episode));
    });

    var sum = await totalEpisode.reduce(function (a, b) {
      return a + b;
    }, 0);

    setTotalEpisodes(sum);
  };

  const handleShowMore = () => {
    setIsShowMore(true);
  };

  useEffect(() => {
    averageScore();
    averageWatchTime();
    totalEpisodeWatched();
  }, [addedAnime]);

  // cari user dari params url yang ada,
  // gimana caranya dapet user?, kita bisa search terus link akan redirect dekan correspond user dan kita akan fetch informasinya disini
  return (
    <div className="w-screen h-min-fit h-max-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
      <div className="relative w-screen">
        <div className="text-white text-4xl top-[30vh] p-4 relative flex flex-row gap-4 items-end font-exo">
          <div className="w-[10vh] h-[10vh] bg-blue-400 border-2 border-white/50" />
          <h1>{user.name}'s Profile</h1>
        </div>
        <div className="w-screen h-screen bg-sky-100 relative top-[30vh]">
          <div className="w-screen h-[6vh] bg-slate-800 text-white items-center flex justify-center">
            <ul className="text-xl flex flex-row gap-4 font-josef text-slate-400">
              <li className="cursor-pointer">Overview</li>
              <li className="cursor-pointer">Anime List</li>
            </ul>
          </div>

          {addedAnime.length >= 1 ? (
            <>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[35vw] h-[10vh] relative top-20 p-4 text-white bg-white font-josef flex flex-row justify-evenly text-center rounded">
                  <div>
                    <h1 className="text-xl text-violet-500">{animeLength}</h1>
                    <h2 className="text-sm text-gray-400">Total Anime</h2>
                  </div>
                  <div>
                    <h1 className="text-xl text-violet-500">
                      {totalEpisodes.toFixed(0)}
                    </h1>
                    <h2 className="text-sm text-gray-400">Total Episode</h2>
                  </div>
                  <div>
                    <h1 className="text-xl text-violet-500">
                      {watchAverage.toFixed(1)}
                    </h1>
                    <h2 className="text-sm text-gray-400">Watch Time (Hour)</h2>
                  </div>
                  <div>
                    <h1 className="text-xl text-violet-500">
                      {average.toFixed(1)}
                    </h1>
                    <h2 className="text-sm text-gray-400">Average Score</h2>
                  </div>
                </div>

                <div className="w-full p-4 relative top-20 justify-center items-start text-white font-josef flex flex-col rounded">
                  <div className="flex flex-col gap-2 relative w-[60vw]">
                    <h1 className="text-gray-600 text-4xl font-josef">
                      Recently Added
                    </h1>
                    <div className="grid grid-cols-3 gap-4 w-screen">
                      {addedAnime.slice(isShowMore ? 0 : -3).map((item, i) => {
                        return (
                          <>
                            <div className="flex flex-col duration-100 select-none mx-2">
                              <div className="w-[30vw] h-[20vh] relative">
                                <img
                                  src={
                                    item.currentAnime?.trailer.images
                                      .maximum_image_url
                                  }
                                  className="w-[30vw] h-full object-center brightness-50 object-cover absolute"
                                />
                                <div className="absolute font-exo text-4xl w-full h-[20vh] flex justify-center items-center">
                                  <h1>{item.currentAnime.title}</h1>
                                </div>
                              </div>
                              <div className="bg-white w-[30vw] h-[10vh] p-4 flex flex-col gap-2">
                                <div className="flex flex-row justify-between gap-0 font-josef truncate">
                                  <span
                                    className={`capitalize overflow-hidden text-lg bg-sky-100 rounded-full w-fit px-2 ${
                                      item.currentStatus === "completed"
                                        ? "text-green-600"
                                        : item.currentStatus === "dropped"
                                        ? "text-red-600"
                                        : item.currentStatus === "planned"
                                        ? "text-gray-600"
                                        : "text-black"
                                    }`}
                                  >
                                    {item.currentStatus}
                                  </span>
                                  <span className="capitalize text-lg flex flex-row gap-2 text-yellow-600">
                                    {Array(Number(item.score))
                                      .fill(0)
                                      .map((items, i) => {
                                        return <AiFillStar />;
                                      })}
                                  </span>
                                </div>
                                <h1 className="text-lg text-gray-600 bg-sky-100 px-2 w-fit rounded-full">
                                  Episodes Watched: {item.episode}
                                </h1>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  {isShowMore ? (
                    ""
                  ) : (

                    <>
                    </>
                    // <button
                    //   className="w-[10vh] h-[4vh] left-[33.6vw] mt-10 text-gray-600 hover:scale-110 rounded duration-200"
                    //   onClick={handleShowMore}
                    // >
                    //   Show More
                    // </button>
                  )}
                </div>
              </div>

              <div className="flex flex-col text-gray-600 font-exo relative top-[20vh] w-screen h-fit bg-sky-100 p-10">
                <h1 className="mb-5 text-4xl">Recent Activity</h1>
                <div className="flex flex-col gap-2 text-start w-[50vw]">
                  {addedAnime.length >= 1 ? (
                    addedAnime.map((item, i) => {
                      return (
                        <h1 className="text-xl text-gray-500">
                          {user.name} Just added{" "}
                          <span className="text-blue-600">
                            {item.currentAnime.title}
                          </span>{" "}
                          To Their Library
                        </h1>
                      );
                    })
                  ) : (
                    <h1 className="text-xl text-gray-500">
                      Account has no activities
                    </h1>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center mt-[20vh]">
              <h1 className="text-gray-500 font-josef text-6xl">
                This account has no activities
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileOverlay;

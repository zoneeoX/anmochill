import React, { useEffect } from "react";
import debounce from "lodash.debounce";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navsearch = () => {
  const [name, setName] = useState("");
  const [anime, setAnime] = useState([]);
  const [isEmpty, setIsEmpty] = useState(Boolean);
  const navigate = useNavigate();

  const fetchSearch = async () => {
    const response = await axios
      .get(`https://api.jikan.moe/v4/anime?q=${name}&limit=10`)
      .then((res) => {
        setAnime(res.data.data);
      });
  };

  useEffect(() => {
    fetchSearch();
  }, [name]);

  const updateSearch = (event) => {
    setName(event.target.value);
  };

  const debounceOnChange = debounce(updateSearch, 500);

  useEffect(() => {
    name.length < 1 ? setIsEmpty(true) : setIsEmpty(false);
  }, [anime]);
  return (
    <div className="flex flex-col gap-10">
      <label htmlFor="input"></label>
      <input
        type="text"
        name="name"
        placeholder="Search Anything"
        autoComplete="off"
        className="focus:outline-none bg-transparent border-b-2 border-white/50 py-1 px-2 text-xl"
        onChange={debounceOnChange}
      />

      <div className="relative">
        {isEmpty ? (
          ""
        ) : (
          <div className="absolute bg-slate-700 min-w-[20vw] max-h-[80vh] flex flex-col gap-4 font-josef rounded-lg overflow-scroll">
            {anime?.map(
              ({ title, images, type, synopsis, mal_id, trailer }, i) => (
                <div
                  key={i}
                  className="flex flex-row gap-2 cursor-pointer hover:bg-white/10 p-4"
                  onClick={() => {
                    setName("");

                    navigate(
                      `/anime/search/${mal_id}/${title.replace(/\s+/g, "-")}/`,
                      {
                        state: {
                          title,
                          synopsis,
                          trailer,
                          images,
                        },
                      }
                    );
                  }}
                >
                  <img
                    src={images.jpg.large_image_url}
                    className="w-[4vw] h-[10vh] rounded-lg"
                  />
                  <div className="flex justify-between">
                    <h1 className="truncate w-[8vw]">{title}</h1>{" "}
                    <h2 className="relative left-[1vw] bg-gray-400 px-2 py-1 rounded-full text-white h-fit w-fit text-sm">
                      {type}
                    </h2>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navsearch;

import React, { useEffect } from "react";
import debounce from "lodash.debounce";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaMedal } from 'react-icons/fa'

const Navsearch = ({ setIsSearchModal }) => {
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
  }, [anime, name]);

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col overflow-y-scroll overflow-x-hidden gap-10 font-josef absolute bg-slate-900 w-screen h-screen top-0 left-0 -z-10"
    >
      <input
        type="text"
        name="name"
        placeholder="Search Anything"
        autoComplete="off"
        className="focus:outline-none bg-transparent border-b-2 border-white/50 py-1 mt-[15vh] px-2 text-xl w-[80%] mx-auto"
        onChange={debounceOnChange}
      />

      <div className="relative">
        {isEmpty ? (
          ""
        ) : (
          <div className="absolute w-[100vw] grid grid-cols-5 gap-4 font-josef rounded-lg p-4">
            {anime?.map(
              ({ title, images, type, synopsis, mal_id, trailer }, i) => (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={i}
                    className="flex flex-row gap-2 w-fit h-fit cursor-pointer hover:scale-105 duration-200 p-4 relative group"
                    onClick={() => {
                      setName("");
                      navigate(
                        `/anime/${mal_id}/${title.replace(/\s+/g, "-")}/`
                      );
                      setIsSearchModal(false);
                    }}
                  >
                    <img
                      src={images.jpg.large_image_url}
                      className="w-[20vw] h-[15vh] rounded-lg object-cover object-center brightness-50 duration-100"
                    />
                    <div className="absolute h-[15vh] p-2 flex flex-col gap-2 w-[15vw] overflow-hidden">
                      <h1 className="truncate">{title}</h1>
                      <h2 className="truncate bg-blue-600 px-2 w-fit rounded-full">
                        {type}
                      </h2>

                      {/* <h2 className="relative left-[1vw] bg-gray-400 px-2 py-1 rounded-full text-white h-fit w-fit text-sm">
                      {type}
                    </h2> */}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navsearch;

import React from "react";
import { CgMenuBoxed } from "react-icons/cg";
import { IoIosArrowDown } from 'react-icons/io'

import blob from "../images/blob.svg";

const Hero = () => {
  return (
    <>
      <img
        src={blob}
        className="w-[100%] h-full absolute -z-50 object-cover bg-gradient-to-b from-teal-900 to-slate-900 object-center"
      />
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className="text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-slate-500 w-fit font-exo">
          Anmo<span>Chill</span>
        </h1>
        <p className="text-2xl cursor-pointer select-nonetext-white w-[32vw] text-center text-white mt-2 font-josef">
          The home of alternative Anime & Movie Rankings, In depth description,
          Recommendations and more!
        </p>

        <p className="flex flex-row items-center gap-2 text-white relative font-josef top-[10vh]">
          <i className="text-4xl">
            <CgMenuBoxed />
          </i>
          For the Anime & Movie community, Made by{" "}
          <span className="text-blue-400">zoneeox</span>
        </p>
        <div className="relative top-[25vh] group hover:scale-110 duration-100">
          <button className="relative w-[5vh] h-[5vh] text-white rounded-full bg-white/10 border-2 border-white/10 hover:bg-white/100 hover:text-black transiion-all shadow-white items-center flex justify-center text-2xl transition-all duration-100">
            <IoIosArrowDown />
          </button>
          <div className="absolute bg-white rounded-full blur-xl inset-0 -z-10 invisible group-hover:visible" />
        </div>
      </div>
    </>
  );
};

export default Hero;

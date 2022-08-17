import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import blob from "../images/blob.svg";

const Hero = () => {
  return (
    <>
      <img
        src={blob}
        className="w-[100%] h-full absolute -z-50 object-cover bg-sky-100 object-center"
      />
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 w-fit">Find your favorite Film & Anime here</h1>
        <p className="border-b-2 border-blue-600 text-2xl cursor-pointer select-none bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500 w-fit">
          Come join the Community!
        </p>
        <div className="relative top-[40%]">
          <button className="relative w-[4vh] h-[4vh] text-white rounded-full bg-orange-500 items-center flex justify-center text-2xl">
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

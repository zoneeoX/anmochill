import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex bg-sky-100 justify-center items-center flex-col">
      <h1 className="text-2xl">Find your favorite Film & Anime here</h1>
      <p className="underline underline-offset-1 cursor-pointer select-none">Log in to continue using this service!</p>
      <div className="relative top-[40%]">
        <button className="relative w-[4vh] h-[4vh] text-white rounded-full bg-orange-500 items-center flex justify-center text-2xl">
          <AiOutlineArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Hero;

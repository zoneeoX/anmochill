import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-screen h-screen bg-red-400 text-white flex justify-center items-center flex-col">
      <div className="w-fit h-fit p-[10vw] bg-white/10 rounded-lg text-center">
        <h1 className="font-exo text-8xl">404</h1>
        <h2 className="font-jose text-4xl">PAGE NOT FOUND</h2>

        <Link to={"/"}>
          <button className="bg-rose-400 px-4 py-1 rounded-full mt-10 hover:scale-110 duration-100 w-[10vh] h-[4vh]">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

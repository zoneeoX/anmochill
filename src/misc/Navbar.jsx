import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen h-[5vw] bg-slate-800 flex flex-row justify-between items-center text-primer px-[10vw] fixed z-50">
      <div className="flex flex-row gap-2 items-end text-white">
        <h1 className="text-4xl flex flex-row text-white">
          Anmo<p className="text-blue-400">Chill</p>
        </h1>

      </div>

      <div className="flex flex-col">
        <label htmlFor="input"></label>
        <input
          type="text"
          placeholder="Search Anything"
          className="focus:outline-none bg-transparent border-b-2 border-white/50 py-1 px-2 text-xl"
        />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navsearch from "../components/Navsearch";

const Navbar = () => {
  const navigate = useNavigate()


  return (
    <nav className="w-screen h-[10vh] bg-slate-800 flex flex-row justify-between items-center text-primer px-[10vw] fixed z-50 filter backdrop-blur-md">
      <div className="flex flex-row gap-2 items-end text-white">
        <h1 className="text-4xl flex flex-row text-white cursor-pointer" onClick={() => navigate('/')}>
          Anmo<p className="text-blue-400">Chill</p>
        </h1>

      </div>

      <div className="flex flex-col text-white relative">
       <Navsearch />
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navsearch from "../components/Navsearch";

const Navbar = () => {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(Boolean);

  useEffect(() => {
    let currentUser = localStorage.getItem("token");
    currentUser ? setIsUser(true) : setIsUser(false);
  }, []);

  function logoutUser() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <nav className="w-screen h-[10vh] bg-slate-800 flex flex-row justify-between items-center text-primer px-[10vw] fixed z-50 filter backdrop-blur-md">
      <div className="flex flex-row items-center justify-center text-white">
        <h1
          className="text-4xl flex flex-row text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Anmo<p className="text-blue-400">Chill</p>
        </h1>

       
      </div>
      <div className="flex flex-row font-exo gap-4 text-white">
      {!isUser ? (
          <>
            <button onClick={() => navigate("/login")} className="">Sign in</button>
            <button onClick={() => navigate("/register")} className="bg-blue-400 text-lg  px-4 py-1 rounded-lg">Sign up</button>
          </>
        ) : (
          <>
            <button onClick={logoutUser} className="bg-red-400 text-lg px-4 py-1 rounded-lg hover:scale-110 duration-200">Logout</button>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-700 text-lg px-4 py-1 rounded-lg hover:scale-110 duration-200">Advanced Search</button>
          </>
        )}
      </div>

      <div className="flex flex-col text-white relative">
        <Navsearch />
      </div>
    </nav>
  );
};

export default Navbar;

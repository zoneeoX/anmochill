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
    <nav className="w-screen h-[10vh] bg-slate-800 flex flex-row justify-between items-center text-primer px-[10vw] fixed z-50 filter backdrop-blur-md text-white">
      <div className="flex flex-row gap-2 items-end text-white">
        <h1
          className="text-4xl flex flex-row text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Anmo<p className="text-blue-400">Chill</p>
        </h1>
      </div>

      <div className="flex flex-row gap-4">
        {!isUser ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="hover:scale-110 duration-200 text-white bg-green-600 rounded-lg px-4 py-1"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-white bg-blue-400 rounded-lg px-4 py-1 hover:scale-110 duration-200"
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            <button
              onClick={logoutUser}
              className="text-white bg-red-400 rounded-lg px-4 py-1 hover:scale-110 duration-200"
            >
              Logout
            </button>
            <button className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-700  rounded-lg px-4 py-1 hover:scale-110 duration-200">
              Advanced Search
            </button>
            <button className="text-white bg-gradient-to-r from-red-300 via-red-600 to-red-700  rounded-lg px-4 py-1 hover:scale-110 duration-200">
              List
            </button>
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

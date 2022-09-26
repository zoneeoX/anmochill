import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navsearch from "../components/Navsearch";
import { logout, reset } from "../features/authSlice";
import { FiLogOut, FiLogIn } from "react-icons/fi"

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth)

  // const [isUser, setIsUser] = useState(Boolean);

  // useEffect(() => {
  //   let currentUser = localStorage.getItem("user");
  //   currentUser ? setIsUser(true) : setIsUser(false);
  // }, []);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

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
        {!user ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="hover:scale-110 duration-200 text-white rounded-lg px-4 py-1 text-bold font-exo"
            >
              Sign in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-white border-[1px] border-blue-400 hover:bg-blue-400 rounded-lg px-4 py-1 hover:scale-110 duration-200 flex gap-2 items-center"
            >
              Sign up
              <i><FiLogIn /></i>
            </button>
          </>
        ) : (
          <>
            <button className="text-white rounded-lg px-4 py-1 hover:scale-110 duration-200 border-[1px] border-red-400 hover:bg-red-400 flex gap-2 items-center" onClick={onLogout}>
              Logout
              <i><FiLogOut /></i>
            </button>

            <button className="text-white rounded-lg px-4 py-1 hover:scale-110 duration-200" onClick={() => navigate('/library')}>
              Library
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

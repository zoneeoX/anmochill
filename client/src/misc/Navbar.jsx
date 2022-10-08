import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navsearch from "../components/Navsearch";
import { logout, reset } from "../features/authSlice";
import { FiLogOut, FiLogIn, FiSearch } from "react-icons/fi";
import AcLOGO from "../images/AcLOGO.png";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  BsPersonFill,
  BsGearFill,
  BsBug,
  BsBookmarkPlusFill,
} from "react-icons/bs";
import { FaMedal } from 'react-icons/fa'

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [down, setDown] = useState(0);
  const [nav, setNav] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const [isSearchModal, setIsSearchModal] = useState(false);
  

  const scrollDetect = (e) => {
    const window = e.currentTarget;
    if (down > window.scrollY) {
      setNav(true);
    } else if (down < window.scrollY) {
      setNav(false);
    }
    setDown(window.scrollY);

    switch (isSearchModal) {
      case true:
        setIsSearchModal(false)
        break;
  
      default:
        break;
    }

    setIsProfile(false)

   
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => scrollDetect(e));

    return () => {
      window.removeEventListener("scroll", (e) => scrollDetect(e));
    };
  }, [down]);
  const { user } = useSelector((store) => store.auth);

  // const [isUser, setIsUser] = useState(Boolean);

  // useEffect(() => {
  //   let currentUser = localStorage.getItem("user");
  //   currentUser ? setIsUser(true) : setIsUser(false);
  // }, []);

  const resetUi = () => {
    setIsProfile(false)
    setIsSearchModal(false)
  }

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const handleProfile = () => {
    setIsProfile(!isProfile);
  };

  const openSearchModal = () => {
    setIsSearchModal(!isSearchModal);
  };

  const navigateToLibrary = () => {
    navigate("/library");
    resetUi()
  };

  const navigateToProfile = () => {
    navigate(`/profile/${user.name}`)
    resetUi()
  }

  return (
    <AnimatePresence>
      {nav && (
        <motion.nav
          className="w-screen select-none h-[10vh] bg-slate-800 flex flex-row justify-between items-center text-primer px-[10vw] fixed z-50 filter backdrop-blur-md text-white"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          exit={{ y: -1000 }}
          transition={{ duration: 0.3, bounce: 0.3 }}
        >
          <div className="flex flex-row gap-2 items-end text-white cursor-pointer">
            <img
              src={AcLOGO}
              className="w-[10vh]"
              onClick={() => navigate("/")}
            />
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
                  <i>
                    <FiLogIn />
                  </i>
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-white rounded-lg px-4 hover:scale-105 transition duration-200 py-1 flex gap-2 items-center"
                  onClick={openSearchModal}
                >
                  <i className={`text-xl ${isSearchModal ? 'text-red-400' : 'text-white'}`}>
                    <FiSearch />
                  </i>
                </button>
                <div className="relative group">
                  <div
                    className="bg-violet-500 w-[40px] h-[3.8vh] rounded-full group-hover:scale-110 duration-200 transition"
                    onClick={handleProfile}
                  >
                    <i className="absolute top-6 left-6">
                      <AiOutlineArrowDown />
                    </i>
                  </div>

                  <AnimatePresence>
                    {isProfile && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -right-[120px] top-[8vh] shadow-black shadow-md bg-slate-800 w-[280px] h-[20vh] rounded flex flex-col text-white select-none"
                      >
                        <div className="w-full h-fit font-josef hover:brightness-100 flex flex-col gap-3 p-4">
                          <button className="flex flex-row gap-2 items-center text-lg text-gray-400 hover:text-white transition-all duration-150" onClick={navigateToProfile}>
                            <i className="text-xl">
                              <BsPersonFill />{" "}
                            </i>
                            Profile
                          </button>

                          <button className="flex flex-row gap-2 items-center text-lg text-gray-400 hover:text-white transition-all duration-150" onClick={() => navigate('/settings')}>
                            <i className="text-xl">
                              <FaMedal />
                            </i>
                            Achievements
                          </button>
                          <button
                            className="flex flex-row gap-2 items-center text-lg text-gray-400 hover:text-white transition-all duration-150 mb-2"
                            onClick={navigateToLibrary}
                          >
                            <i className="text-xl">
                              <BsBookmarkPlusFill />
                            </i>
                            Library
                          </button>
                        </div>

                        <div className="w-full h-full bg-slate-900 rounded-t-lg p-2 flex flex-row gap-2 items-center justify-center">
                          <button
                            className="text-rose-400 rounded-lg px-4 hover:scale-110 duration-200 flex gap-2 items-center"
                            onClick={onLogout}
                          >
                            <i>
                              <FiLogOut />
                            </i>
                            Logout
                          </button>

                          <button className="text-rose-400 rounded-lg px-4 hover:scale-110 duration-200 flex gap-2 items-center">
                            <i>
                              <BsBug />
                            </i>
                            Report Bug
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {isSearchModal ? (
                    <Navsearch setIsSearchModal={setIsSearchModal} />
                  ) : (
                    ""
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;

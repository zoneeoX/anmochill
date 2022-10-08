import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/authSlice";
import AcLOGO from "../images/AcLOGO.png";
import sky from "../images/sky.jpg";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (store) => store.auth
  );

  useEffect(() => {
    if (isError) {
      alert("Error");
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  function updateData(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  // async function registerUser(e) {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:3001/api/users/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //   });

  //   const data = await response.json();
  //   if (data.user) {
  //     localStorage.setItem("token", data.user);
  //     alert("Log in successful");
  //     window.location.href = "/";
  //   } else {
  //     alert("Please check your credentials");
  //   }
  // }

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className="w-screen h-screen bg-black/50 flex justify-center items-center font-josef">
      <img
        src={sky}
        className="w-screen h-screen object-cover object-center top-0 left-0 absolute -z-50"
      />

      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className='flex flex-row'>
        <div className="bg-gradient-to-r from-slate-400 to-blue-700 w-[20vw] h-[50vh] rounded-l-xl flex justify-center items-center flex-col gap-2">
          <img src={AcLOGO} className="w-[10vw]" />
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-500">
            Anmochill
          </h1>
        </div>

        <form
          className="w-[40vw] h-[50vh] p-10 bg-blue-700 rounded-r-lg font-josef"
          onSubmit={onSubmit}
        >
          <h1 className="text-white text-4xl font-josef">
            Login<span className="text-blue-400">.</span>
          </h1>
          <p className="text-sm text-gray-400 font-josef">
            Don't have an account?{" "}
            <span className="text-blue-400 cursor-pointer underline underline-offset-4" onClick={() => navigate('/register')}>
              Create an account
            </span>{" "}
            Instead.
          </p>
          <div className="flex flex-col gap-10 mt-10 text-white font-josef w-[35vh]">
            <label className="grid grid-cols-1">
              <span className="text-gray-400 text-sm">Email Address</span>
              <input
                className="bg-transparent border-b-2 border-white/50 px-2 py-1 focus:outline-none"
                type="email"
                name="email"
                placeholder="Austin@gmail.com"
                autoComplete="off"
                onChange={updateData}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-gray-400 text-sm">Password</span>
              <input
                className="bg-transparent border-b-2 border-white/50 px-2 py-1 focus:outline-none"
                type="password"
                name="password"
                placeholder="..."
                autoComplete="off"
                onChange={updateData}
              />
            </label>

            <button
              className="px-2 py-1 hover:scale-105 duration-100"
              type="submit"
            >
              Login to Account
            </button>
          </div>
        </form>
      </motion.div>

      {/* <div className="w-[20vw] h-[60.8vh] bg-slate-800 flex justify-center items-center">
      <h1 className="text-white text-4xl">Register</h1>
    </div> */}
      {/* <h1 className="text-white font-exo text-4xl">Create new Account</h1>
      <span>Already have an account?</span>
      <form
      className="bg-slate-800 rounded-xl grid grid-cols-2 w-[55vw] min-h-[50vh] max-h-fit text-white text-2xl p-10 gap-10"
      // onSubmit={registerUser}
      onSubmit={onSubmit}
      >
      <label className="flex flex-col col-span-2">
        <input
        type="text"
        name="name"
        placeholder="Zachyling etc."
        className="focus:outline-none bg-slate-700 w-[15vw] px-2 py-1 rounded-2xl"
        autoComplete="off"
        onChange={updateData}
        />
        </label>
      <label className="flex flex-col col-span-2">
      <span className="text-sm text-gray-500 font-josef">Email</span>
        <input
          type="email"
          name="email"
          placeholder="Zach@gmail.com"
          className="bg-transparent border-b-2 border-white/50 focus:outline-none"
          autoComplete="off"
          onChange={updateData}
        />
      </label>
      <label className="flex flex-col">
      <span className="text-sm text-gray-500 font-josef">Password</span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-transparent border-b-2 border-white/50 focus:outline-none"
          autoComplete="off"
          onChange={updateData}
        />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-gray-500 font-josef">Confirm Password</span>
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          className="bg-transparent border-b-2 border-white/50 focus:outline-none"
          autoComplete="off"
          onChange={updateData}
        />
      </label>

      <button
        type="submit"
        className="bg-slate-800 p-2 rounded-full mt-[4vh] hover:brightness-125 duration-200"
      >
        Create Account.
      </button> */}
      {/* </form> */}
    </div>
  );
};

export default Login;

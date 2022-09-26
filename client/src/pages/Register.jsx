import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/authSlice";

import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  function updateData(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Error Password do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  // async function registerUser(e) {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:3001/api/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name,
  //       email,
  //       password,
  //     }),
  //   });

  //   const data = await response.json();
  //   window.location.href = "/login";
  // }

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className="w-screen h-screen bg-sky-100 flex justify-center items-center font-josef">
      <div className="w-[20vw] h-[60.8vh] bg-slate-800 flex justify-center items-center">
        <h1 className="text-white text-4xl">Register</h1>
      </div>
      <form
        className="bg-slate-900 flex flex-col w-[40vw] min-h-[50vh] max-h-fit text-white text-2xl p-10 gap-10"
        // onSubmit={registerUser}
        onSubmit={onSubmit}
      >
        <label className="flex flex-col">
          Name
          <input
            type="text"
            name="name"
            placeholder="Zachyling etc."
            className="bg-transparent border-b-2 border-white/50 focus:outline-none"
            autoComplete="off"
            onChange={updateData}
          />
        </label>
        <label className="flex flex-col">
          Email
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
          Password
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
          Confirm Password
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
          Register User.
        </button>
      </form>
    </div>
  );
};

export default Register;

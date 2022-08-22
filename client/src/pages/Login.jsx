import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function updateData(e) {
    setFormData((prevData) => ({
      ...prevData,  
      [e.target.name]: e.target.value,
    }));
  }

  async function registerUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (data.user) {
      localStorage.setItem('token', data.user)
      alert("Log in successful");
      window.location.href = "/";
    } else {      
      alert("Please check your credentials");
    }
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="w-screen h-screen bg-sky-100 flex justify-center items-center font-josef">
      <div className="w-[20vw] h-[50vh] bg-slate-800 flex justify-center items-center">
        <h1 className="text-white text-4xl">Login</h1>
      </div>
      <form
        className="bg-slate-900 flex flex-col w-[40vw] h-[50vh] text-white text-2xl p-10 gap-10"
        onSubmit={registerUser}
      >
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

export default Login;

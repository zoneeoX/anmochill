import React from "react";

const Register = () => {
  return (
    <div className="bg-sky-100 w-screen h-screen flex justify-center items-center">
      <div className="bg-slate-800 w-[40vw] h-[70vh] flex-col flex justify-center items-start p-10">
        <div className="flex flex-col gap-4 text-white font-exo text-2xl">
          <label>First Name</label>
          <input type="text" placeholder="First Name" />

          <label>Last Name</label>
          <input type="text" placeholder="Last Name" />
          <label>Email</label>

          <input type="text" placeholder="Email" />
          <label>Password</label>

          <input type="text" placeholder="Password" />
        </div>
      </div>
    </div>
  );
};

export default Register;

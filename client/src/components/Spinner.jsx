import React from "react";
import { CgSpinner } from "react-icons/cg";

const Spinner = () => {
  return (
    <div className="bg-sky-100 w-screen h-screen items-center justify-center flex text-6xl">
      <i className="animate-spin">
        <CgSpinner />
      </i>
    </div>
  );
};

export default Spinner;

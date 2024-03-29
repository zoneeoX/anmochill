import React from "react";
import { useNavigate } from "react-router-dom";

const Animecontainer = ({ children, type, to }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="mx-[11.5vw] mb-4 text-[1vw] font-bold text-gray-600">
          {type}
        </h1>
        <h2
          className="mx-[11.5vw] cursor-pointer"
          onClick={() => navigate(to)}
        >
          View all.
        </h2>
      </div>
      <div className="grid grid-cols-6 mx-[10vw] place-items-center">{children}</div>
    </div>
  );
};

export default Animecontainer;

import React from "react";
import Animecontainer from "./Animecontainer";

const Cardskeleton = () => {
  return (
    <Animecontainer>
      {Array(12)
        .fill()
        .map((item, index) => (
          <div>
            <div className="flex flex-col gap-0 mt-10 mb-20">
              <div
                className="bg-slate-700 w-[10vw] h-[15vw] rounded-lg animate-pulse"
                key={index}
              />
              <div className="bg-slate-700 w-[5vw] h-[1.5vh] rounded-lg animate-pulse mt-2" />
            </div>
          </div>
        ))}
    </Animecontainer>
  );
};

export default Cardskeleton;

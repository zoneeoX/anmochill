import React from "react";
import LongcardContainer from "./LongcardContainer";

const LongcardSkeleton = () => {
  return (
    <LongcardContainer>
      {Array(10)
        .fill()
        .map((item, index) => (
          <div
            className="bg-slate-700 w-[79.5vw] mx-[10vw] h-[5vw] rounded-lg animate-pulse relative flex flex-row"
            key={index}
          >
            <div className="bg-slate-600 py-6 px-6 m-4 relative" />

            <div className="flex flex-col gap-2 mt-1 ml-2">
              <div className="bg-slate-600 w-[70vw] h-[1.5vh] rounded-lg animate-pulse top-[3.5vh] relative" />
              <div className="flex flex-row gap-2">
                {Array(3)
                  .fill()
                  .map((genre, idx) => {
                    return (
                      <div className="bg-slate-600 w-[4vw] h-[1.5vh] rounded-lg animate-pulse top-[4vh] relative" />
                    );
                  })}
              </div>
            </div>
          </div>
        ))}
    </LongcardContainer>
  );
};

export default LongcardSkeleton;

import React from "react";

const Trailer = ({ currentAnime }) => {
  return currentAnime.trailer?.embed_url && currentAnime.trailer?.embed_url !== (null || undefined || '') ? (
    <div className="mt-10 ml-10 ">
      <h1 className="text-xl text-gray-400 font-exo font-semibold py-2">
        Trailer
      </h1>
      <div className="h-[49.4vh] md:w-[60vw] w-screen">
        <iframe
          src={currentAnime?.trailer.embed_url}
          className="w-full h-[50vh] pr-[23vw]"
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Trailer;

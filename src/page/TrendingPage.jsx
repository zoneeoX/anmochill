import React from "react";
import { useSelector } from "react-redux";

const TrendingPage = () => {
  const selected = useSelector((store) => store.trending);
  const { itemList } = selected;

  return (
    <div className="w-screen min-h-screen max-h-full bg-sky-100 py-10">
      <h1 className="mx-[10vw] mb-[5vw] text-4xl pt-[10vw] font-bold text-gray-600">This season.</h1>
      <div className="grid grid-cols-6 gap-10 mx-[10vw]">
        {itemList.map(({ images, title }, i) => (
          <div key={i}>
            <img
              src={images.jpg.large_image_url}
              className="w-[15vw] h-[20vw] rounded-lg"
            />
            <h2 className="text-gray-600 font-semibold truncate">{title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;

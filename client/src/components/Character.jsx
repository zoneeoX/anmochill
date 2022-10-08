import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";

const Character = ({ currentCharacters }) => {
  console.log(currentCharacters);
  const [filteredCharacter, setFilteredCharacter] = useState([]);

  function filterCharacters() {
    var newCharacters = currentCharacters?.filter((element, index) => {
      return element.favorites > 100;
    });
    setFilteredCharacter(newCharacters);
  }

  useEffect(() => {
    filterCharacters();
  }, [currentCharacters]);

  return (
    <div className="mt-10 ml-10 ">
      <h1 className="text-xl text-gray-400 font-exo font-semibold py-2">
        Characters
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
        {filteredCharacter.map((item, i) => (
          i < 9 &&
          <div key={i} className="flex flex-row rounded-lg hover:scale-105 transition-all duration-150">
            <img
              src={item.character.images?.jpg.image_url}
              className="rounded-l-xl w-[9vh] h-[9vh] object-cover object-center"
              alt=""
            />
            <div className="bg-white w-[12vw] h-[9vh] rounded-r flex flex-col">
              <h2 className="font-exo p-2 text-md w-[15vw] truncate">
                {item.character.name}
              </h2>
              <h2 className="font-josef p-2 text-sm w-[10vw] h-fit truncate">
                CV. {item.voice_actors[0]?.person.name}
              </h2>
              <p className="font-josef text-sm relative top-2 p-2 opacity-50">
                {item.role}
              </p>
            </div>
            <img
              src={item.voice_actors[0]?.person.images.jpg.image_url}
              alt='Voice actor picture'
              className="rounded-r-xl w-[9vh] h-[9vh] object-cover object-center bg-slate-900"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;

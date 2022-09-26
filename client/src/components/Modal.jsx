import React from "react";
import { useSelector } from "react-redux";

const Modal = ({ setOpenModal }) => {
  const { currentAnime } = useSelector((store) => store.searchId);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <form
      className="bg-black/75 w-screen h-screen fixed flex flex-col justify-center items-center z-50"
      onSubmit={onSubmit}
    >
      <div className="w-[60vw] h-[20vh] relative">
        <button
          className="text-2xl z-50 right-[1vw] text-white font-exo top-[2vh] absolute"
          onClick={closeModal}
        >
          x
        </button>
        <button className="bg-blue-400 px-4 py-1 absolute z-50 right-[2vw] top-[15vh] text-white font-josef">
          Save
        </button>
        <h2 className="absolute z-50 text-white font-exo text-2xl left-[10vw] top-[15vh]">
          {currentAnime.title}
        </h2>
        <img
          src={currentAnime.images?.jpg.large_image_url}
          className="w-[6vw] h-[16vh] absolute z-50 left-[3vw] top-[6vh]"
        />
        <img
          src={currentAnime.trailer?.images.maximum_image_url}
          className="w-full h-[20vh] object-center object-cover grayscale brightness-50 absolute"
        />
      </div>
      <div className="bg-sky-100 w-[60vw] h-[45vh] relative -z-10 grid grid-cols-3 px-10 py-20">
        <label className="flex flex-col">
          Status
          <select>
            <option>Plan to watch</option>
            <option>Completed</option>
            <option>Watching</option>
            <option>Dropped</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default Modal;

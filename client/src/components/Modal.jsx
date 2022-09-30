import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnime } from "../features/add/addSlice";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ setOpenModal }) => {
  const { currentAnime } = useSelector((store) => store.searchId);

  const [status, setStatus] = useState({
    currentStatus: "",
    episode: "",
    currentAnime: currentAnime,
  });

  const { currentStatus, episode } = status;
  const mal_id = currentAnime.mal_id

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnime({ mal_id, currentStatus, episode, currentAnime }));
    // setStatus({
    //   status: "",
    // });
    setOpenModal(false);
  };

  const onChange = (e) => {
    setStatus((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    // setStatus(e.target.value)
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <form
      className="bg-black/75 w-screen h-screen fixed flex flex-col justify-center items-center z-50"
      onSubmit={onSubmit}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3, bounce: 0.3 }}
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
          <h2 className="absolute z-50 text-white font-exo text-2xl left-[10vw] top-[15vh] w-[40vw] truncate">
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
        <section className="bg-sky-100 w-[60vw] h-[45vh] relative z-10 grid grid-cols-3 px-10 py-20">
          <label className="flex flex-col">
            Status
            <select
              onChange={onChange}
              name="currentStatus"
              value={status.currentStatus}
              required
            >
              <option value="" disabled hidden>
                Status
              </option>
              <option value={"planned"}>Plan to watch</option>
              <option value={"completed"}>Completed</option>
              <option value={"watching"}>Watching</option>
              <option value={"dropped"}>Dropped</option>
            </select>
          </label>
          <label className="flex flex-col">
            Episode Progress
            <input onChange={onChange} name="episode" value={status.episode} />
          </label>
        </section>
      </motion.div>
    </form>
  );
};

export default Modal;

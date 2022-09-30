const asyncHandler = require("express-async-handler");
const Ac = require("../models/acModel");
const User = require("../models/userModel");

const getAnime = asyncHandler(async (req, res) => {
  const anime = await Ac.find({ user: req.user.id });

  res.status(200).json(anime);
});

const addAnime = asyncHandler(
  async (req, res) => {
    const { currentStatus, episode, currentAnime, mal_id } = req.body;

    if (!currentStatus || !episode || !currentAnime || !mal_id) {
      res.status(400);
      throw new Error("Something went wrong!, the sending request is empty");
    }

    //kalo currentanime udah ada dari frontend ke dalem backend kita kan dapet mal id nya tuh ya nah terus kita compare curentanime yang di send sama yang di backend
    // let animeExists = Ac.findOne({currentAnime})
    const userAnime = req.user.id
    let animeExists = await Ac.find({ user: req.user.id, mal_id });

    // if (animeExists) {
    //   res.status(409).json({animeExists});
    // } else {
    if (animeExists.length >= 1 ? animeExists[0].mal_id === mal_id : '') {
      res.status(409).json({ message: animeExists });
    } else {
      const anime = await Ac.create({
        mal_id: req.body.mal_id,
        currentStatus: req.body.currentStatus,
        episode: req.body.episode,
        currentAnime: req.body.currentAnime,
        user: req.user.id,
      });

      res.status(200).json(anime);
    }
  }

  // const { currentAnime } = req.body;

  // if(animeExists){
  //   res.status(409).json({message: 'Anime already exists'})
  // } else {

  // }
);

const editAnime = asyncHandler(async (req, res) => {
  // Ac find by id di cari di database mongodb
  const anime = await Ac.findById(req.params.id);

  //kalo ngak ada bakal throw error
  if (!anime) {
    res.status(400);
    throw new Error("Anime Not Found");
  }

  // dispatch(editFromLibrary(status, currentAnime._id));

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //make sure the logged in user matches the goal user
  if (anime.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  //kita cari id nya didalam database dan kita update, kita pass id(didalam url) dan kita pass body juga (modified textnya di dalam body)
  const editedAnime = await Ac.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(editedAnime);
});

const deleteAnime = asyncHandler(async (req, res) => {
  const anime = await Ac.findById(req.params.id);

  if (!anime) {
    res.status(400);
    throw new Error("Anime Not Found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //make sure the logged in user matches the goal user
  if (anime.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await anime.remove();

  // const deleted = await Ac.findByIdAndDelete(req.params.id)

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAnime,
  addAnime,
  editAnime,
  deleteAnime,
};

const asyncHandler = require("express-async-handler");
const Ac = require('../models/acModel')



const getAnime = asyncHandler(async (req, res) => {
  const anime = await Ac.find()


  res.status(200).json(anime);
});

const addAnime = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Something went wrong!, the sending request is empty");
  }

  const anime = await Ac.create({
    text: req.body.text
  })

  res.status(200).json(anime);
});

const editAnime = asyncHandler(async (req, res) => {
  const anime = await Ac.findById(req.params.id)

  if(!anime){
    res.status(400)
    throw new Error('Anime Not Found')
  }

  const editedAnime = await Ac.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })


  res.status(200).json(editedAnime);
});

const deleteAnime = asyncHandler(async (req, res) => {
  const anime = await Ac.findById(req.params.id)

  if(!anime){
    res.status(400)
    throw new Error('Anime Not Found')

  }

  await anime.remove()

  // const deleted = await Ac.findByIdAndDelete(req.params.id)


  res.status(200).json({id: req.params.id});
});

module.exports = {
  getAnime,
  addAnime,
  editAnime,
  deleteAnime,
};

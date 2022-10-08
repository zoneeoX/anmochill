const express = require("express");
const router = express.Router();
const {
  getAnime,
  addAnime,
  editAnime,
  deleteAnime,
  getOtherAnime
} = require("../controller/acController");

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getAnime).post(protect, addAnime)
router.route('/profiles').post(getOtherAnime)
router.route('/:id').delete(protect, deleteAnime).put(protect, editAnime)


module.exports = router;
 
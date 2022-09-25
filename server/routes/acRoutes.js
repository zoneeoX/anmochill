const express = require("express");
const router = express.Router();
const {
  getAnime,
  addAnime,
  editAnime,
  deleteAnime,
} = require("../controller/acController");

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getAnime).post(protect, addAnime)
router.route('/:id').delete(protect, deleteAnime).put(protect, editAnime)


module.exports = router;
 
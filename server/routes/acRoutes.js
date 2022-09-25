const express = require("express");
const router = express.Router();
const {
  getAnime,
  addAnime,
  editAnime,
  deleteAnime,
} = require("../controller/acController");

router.route('/').get(getAnime).post(addAnime)
router.route('/:id').delete(deleteAnime).put(editAnime)


module.exports = router;
 
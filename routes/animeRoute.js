const express = require("express");
const {
  getAllAnime,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
} = require("../controllers/AnimeController");
const router = express.Router();

router.get("/", getAllAnime);
router.get("/:id", getAnimeById);
router.post("/", createAnime);
router.put("/:id", updateAnime);
router.delete("/:id", deleteAnime);

module.exports = router;

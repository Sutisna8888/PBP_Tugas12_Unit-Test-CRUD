const animeService = require("../services/animeService");

// Get all anime
const getAllAnime = async (req, res) => {
  try {
    const animeList = await animeService.getAllAnime();
    res.status(200).json(animeList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get anime by id
const getAnimeById = async (req, res) => {
  try {
    const anime = await animeService.getAnimeById(req.params.id);
    if (!anime) return res.status(404).json({ message: "Anime not found" });
    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new anime
const createAnime = async (req, res) => {
  try {
    const anime = await animeService.createAnime(req.body);
    res.status(201).json(anime);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update anime
const updateAnime = async (req, res) => {
  try {
    const anime = await animeService.updateAnime(req.params.id, req.body);
    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete anime
const deleteAnime = async (req, res) => {
  try {
    await animeService.deleteAnime(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAnime,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
};

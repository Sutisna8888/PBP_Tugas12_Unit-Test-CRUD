const prisma = require("../prisma/client");

const getAllAnime = async () => {
  return await prisma.animeList.findMany();
};

const getAnimeById = async (id) => {
  return await prisma.animeList.findUnique({ where: { id: Number(id) } });
};

const createAnime = async (data) => {
  return await prisma.animeList.create({ data });
};

const updateAnime = async (id, data) => {
  return await prisma.animeList.update({ where: { id: Number(id) }, data });
};

const deleteAnime = async (id) => {
  return await prisma.animeList.delete({ where: { id: Number(id) } });
};

module.exports = {
  getAllAnime,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime,
};

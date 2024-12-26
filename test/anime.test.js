const request = require("supertest");
const app = require("../index");
const prisma = require("../prisma/client");

beforeAll(async () => {
  // Clear the anime list table before testing
  await prisma.animeList.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect(); // Close Prisma connection
});

describe("Anime API Endpoints", () => {
  let animeId;

  test("POST /anime - Create a new anime", async () => {
    const response = await request(app).post("/anime").send({
      judul: "Naruto",
      sumber: "Manga",
      author: "Masashi Kishimoto",
      studio: "Pierrot",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.judul).toBe("Naruto");
    animeId = response.body.id;
  });

  test("GET /anime - Get all anime", async () => {
    const response = await request(app).get("/anime");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("GET /anime/:id - Get an anime by ID", async () => {
    const response = await request(app).get(`/anime/${animeId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id", animeId);
    expect(response.body.judul).toBe("Naruto");
  });

  test("PUT /anime/:id - Update an anime", async () => {
    const response = await request(app).put(`/anime/${animeId}`).send({
      judul: "Naruto Shippuden",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.judul).toBe("Naruto Shippuden");
  });

  test("DELETE /anime/:id - Delete an anime", async () => {
    const response = await request(app).delete(`/anime/${animeId}`);
    expect(response.statusCode).toBe(204);
  });
});

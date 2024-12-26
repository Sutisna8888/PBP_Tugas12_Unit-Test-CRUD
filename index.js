const express = require("express");
const animeRoutes = require("./routes/animeRoute");

const app = express();

app.use(express.json());
app.use("/anime", animeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

const express = require("express");
const app = express();

app.listen(5001, () => {
  console.log("server running on port 5001");
});

app.get("/getRecipes", (req, res) => {
  res.json({ recipes: ["1", "2", "3"] });
});

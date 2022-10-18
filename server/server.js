require("dotenv").config();

const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.listen(5001, () => {
  console.log("server running on port 5001");
});

app.get("/getRecipes", async (req, res) => {
  // res.json({ recipes: ["1", "2", "3"] });

  await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=American&number=8&apiKey=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log("recipe data", data);
      res.send(data.results);
    });
});

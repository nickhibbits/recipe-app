import { Link } from "react-router-dom";
import React from "react";

import "../styles/RecipeScrollContainer.scss";

function RecipeScrollContainer({ recipes, categoryTitle }) {
  return (
    <main className="recipe-scroll-container-component ">
      <h2 className="category-title">{categoryTitle}</h2>
      <ul className="recipes-list">
        {Object.values(recipes).map((recipe, i) => {
          return (
            <Link to={`/recipeProfile/:${recipe.id}`} key={recipe.id}>
              <li
                className="recipe-card flex"
                style={{
                  backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.25),
                  rgba(0, 0, 0, 0.25)
                ), url(${recipe.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  maxWidth: "100%",
                }}
              >
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-short-description">{recipe.description}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}

export default RecipeScrollContainer;

import { Link } from "react-router-dom";
import React from "react";

import "../styles/RecipeScrollContainer.scss";

function RecipeScrollContainer({ recipes, categoryTitle }) {
  return (
    <main className="recipe-scroll-container-component flex-column">
      <h2 className="category-title">{categoryTitle}</h2>
      <ul className="recipes-list flex-row">
        {Object.values(recipes).map((recipe) => {
          return (
            <li className="recipe-card-wrapper">
              <Link>
                <div className="recipe-card flex-column">
                  <h3 className="recipe-title">{recipe.title}</h3>
                  <p className="recipe-short-description">
                    {recipe.description}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default RecipeScrollContainer;

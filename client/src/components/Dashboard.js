// import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import RecipeScrollContainer from "./RecipeScrollContainer";

function Dashboard({ recipeCategories }) {
  const categoryTitles = Object.keys(recipeCategories);

  return (
    <main className="dashboard-component component">
      <h1 className="page-heading">Dashboard</h1>
      {Object.values(recipeCategories).map((category, i) => {
        // console.log("category 🎃", category);
        return (
          <RecipeScrollContainer
            recipes={category}
            categoryTitle={categoryTitles[i]}
            key={i}
          />
        );
      })}
      {/* <RecipeScrollContainer recipes={} categoryTitle="Popular" />
      <RecipeScrollContainer recipes={} categoryTitle="My Recipes" /> */}
    </main>
  );
}

const mapStateToProps = ({ recipeCategories }) => {
  return {
    recipeCategories,
  };
};
export default connect(mapStateToProps)(Dashboard);

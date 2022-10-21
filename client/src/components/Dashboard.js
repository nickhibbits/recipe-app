// import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import RecipeScrollContainer from "./RecipeScrollContainer";

function Dashboard({ recipeCategories }) {
  const categoryTitles = Object.keys(recipeCategories);

  return (
    <main className="dashboard-component component">
      <h1 className="page-heading">Dashboard</h1>
      {Object.values(recipeCategories).map((category, i) => {
        return (
          <RecipeScrollContainer
            recipes={category}
            categoryTitle={categoryTitles[i]}
            key={i}
          />
        );
      })}
    </main>
  );
}

const mapStateToProps = ({ recipeCategories }) => {
  return {
    recipeCategories,
  };
};
export default connect(mapStateToProps)(Dashboard);

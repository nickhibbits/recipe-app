// import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import NewUserCuisineSelect from "./NewUserCuisineSelect";
import RecipeScrollContainer from "./RecipeScrollContainer";

function Dashboard({ recipeCategories, username, users }) {
  const categoryTitles = Object.keys(recipeCategories);

  return (
    <main className="dashboard-component component">
      <h1 className="page-heading">Dashboard</h1>
      {users[username].newUser === true ? (
        <NewUserCuisineSelect />
      ) : (
        Object.values(recipeCategories).map((category, i) => {
          return (
            <RecipeScrollContainer
              recipes={category}
              categoryTitle={categoryTitles[i]}
              key={i}
            />
          );
        })
      )}
    </main>
  );
}

const mapStateToProps = ({ auth, users, recipeCategories }) => {
  return {
    username: auth.user,
    users: users.byId,
    recipeCategories,
  };
};
export default connect(mapStateToProps)(Dashboard);

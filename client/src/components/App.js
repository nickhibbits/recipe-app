import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import RecipeProfile from "./RecipeProfile";
import UserProfile from "./UserProfile";
import RecipeCharts from "./RecipeCharts";
import MyRecipes from "./MyRecipes";
import Nav from "./Nav";

import "../styles/App.scss";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/recipeProfile/:id" element={<RecipeProfile />} />
        <Route path="userProfile/:userId" element={<UserProfile />} />
        <Route path="recipeCharts" element={<RecipeCharts />} />
        <Route path="myRecipes" element={<MyRecipes />} />
      </Routes>
    </div>
  );
}

export default connect()(App);

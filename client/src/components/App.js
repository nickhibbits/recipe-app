import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import Login from "./Login";
import MyRecipes from "./MyRecipes";
import Nav from "./Nav";
import RecipeProfile from "./RecipeProfile";
import RecipeCharts from "./RecipeCharts";
import UserProfile from "./UserProfile";

import "../styles/App.scss";

function App(props) {
  const { dispatch } = props;
  const [authedUser, setAuthedUser] = useState(false);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (!authedUser) {
    return <Login setAuth={() => setAuthedUser((authedUser) => !authedUser)} />;
  }

  if (authedUser) {
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
}

export default connect()(App);

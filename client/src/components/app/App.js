import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  handleGetRecipeCategories,
  handleInitialLogin,
} from "../../actions/shared";
import { useLoadingCheck } from "../../utils/customHooks";

import Dashboard from "./Dashboard";
import MyRecipes from "./MyRecipes";
import Nav from "./Nav";
import RecipeProfile from "./RecipeProfile";
import RecipeCharts from "./RecipeCharts";
import UserProfile from "./UserProfile";

import "../../styles/App.scss";

function App({ dispatch, auth, users }) {
  const { loggedIn, user } = auth;

  const loading = useLoadingCheck(loggedIn);

  useEffect(() => {
    dispatch(handleInitialLogin(loggedIn));

    if (loggedIn === true && users.byId[user].newUser === false) {
      const userRecipeCategories = users.byId[user].savedRecipeCategories;
      dispatch(handleGetRecipeCategories(userRecipeCategories));
    }
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (loggedIn === false) {
    console.log("no user ❌");
    return <Navigate to={`/auth`} />;
  }

  if (loggedIn) {
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

const mapStateToProps = ({ auth, users }) => {
  return {
    auth,
    users,
  };
};

export default connect(mapStateToProps)(App);

import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import MyRecipes from "./MyRecipes";
import Nav from "./Nav";
import RecipeProfile from "./RecipeProfile";
import RecipeCharts from "./RecipeCharts";
import UserProfile from "./UserProfile";

import "../../styles/App.scss";
import { handleInitialLogin } from "../../actions/shared";

function App(props) {
  const [loading, setLoading] = useState(true);
  console.log("loading", loading);

  const { dispatch, auth } = props;
  const { loggedIn } = auth;

  useEffect(() => {
    dispatch(handleInitialLogin());
  }, [dispatch]);

  useEffect(() => {
    loggedIn === false && setLoading(false);
  }, [loggedIn]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (loggedIn === false) {
    console.log("no user ❌");
    return <Navigate to={`/auth`} />;
  }

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

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
export default connect(mapStateToProps)(App);

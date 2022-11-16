import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleGetUsers, handleInitialData } from "../actions/shared";

import CreateUser from "./CreateUser";
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
  const [authStatus, setAuthStatus] = useState("notLoggedIn");

  useEffect(() => {
    dispatch(handleGetUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log("authStatus", authStatus);
  }, [authStatus]);

  if (authStatus === "notLoggedIn") {
    return <Login setAuth={(authStatus) => setAuthStatus(authStatus)} />;
  }

  if (authStatus === "createUser") {
    return <CreateUser />;
  }

  if (props.auth.loggedIn === true) {
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

import { Navigate, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

import { setAuth } from "../../actions/auth";
import { useLoadingCheck } from "../../utils/customHooks";
import {
  handleGetRecipeCategories,
  handleGetUsers,
} from "../../actions/shared";

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
  // localStorage.clear();

  useEffect(() => {
    dispatch(handleGetUsers());
  }, [dispatch]);

  // login check
  useEffect(() => {
    if (!loggedIn) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      console.log("userInfo", userInfo);

      if (!userInfo) {
        dispatch(setAuth({ user, loggedIn }));
      } else {
        const { user } = userInfo;
        dispatch(setAuth({ user, loggedIn: true }));
      }
    }
  }, [dispatch, user, loggedIn]);

  // populate saved user recipes and recipeCategories
  useEffect(() => {
    let mounted = true;

    if (mounted === true) {
      console.log("mounted", mounted);
      if (loggedIn === true && Object.values(users).length !== 0) {
        if (users.byId[user].newUser === false) {
          const userRecipeCategories = users.byId[user].savedRecipeCategories;
          const savedRecipes = users.byId[user].savedRecipes;

          console.log("App rerendered 🥞");

          dispatch(
            handleGetRecipeCategories(userRecipeCategories, savedRecipes)
          );
        }
      }
    }

    return () => {
      mounted = false;
      console.log("mounted", mounted);
    };
  }, [users, loggedIn, user, dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (loggedIn === false) {
    return <Navigate to={`/auth`} />;
  }

  if (loggedIn && Object.keys(users).length !== 0) {
    console.log("users fuckup", {
      user: user,
      newUserStatus: users.byId[user],
    });
    if (users.byId[user].newUser) {
      return <Navigate to={`/new-user-cuisines`} />;
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
}

const mapStateToProps = ({ auth, users }) => {
  return {
    auth,
    users,
  };
};

export default connect(mapStateToProps)(App);

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import React from "react";

import "../../styles/Nav.scss";

function Nav({ auth }) {
  return (
    <header>
      <nav className="nav">
        <div className="nav-contents-wrapper ">
          {typeof auth.loggedIn ? (
            <p className="logged-in-user">
              Logged in as <strong>{auth.user}</strong>
            </p>
          ) : (
            <p className="logged-in-user">Loading</p>
          )}
          <ul className="nav-links flex-row">
            <li className="nav-link">
              <Link to={"/"}>Dashboard</Link>
            </li>
            <li className="nav-link">
              <Link to={"userProfile/:userId"}>User Profile</Link>
            </li>
            <li className="nav-link">
              <Link to={"recipeCharts"}>Charts </Link>
            </li>
            <li className="nav-link">
              <Link to={"myRecipes"}>My Recipes</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Nav);

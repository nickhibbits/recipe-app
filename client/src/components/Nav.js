import React from "react";
import { Link } from "react-router-dom";

import "../styles/Nav.scss";

function Nav() {
  return (
    <header>
      <nav className="nav flex">
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
      </nav>
    </header>
  );
}

export default Nav;

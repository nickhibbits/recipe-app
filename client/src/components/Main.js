import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleInitialLogin } from "../actions/shared";

import Auth from "./auth/Auth";
import App from "./app/App";

import "../styles/App.scss";

function Main(props) {
  // if (props.auth.loggedIn === true) {
  return (
    <div className="Main">
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/auth/*" exact element={<Auth />} />
      </Routes>
    </div>
  );
  // }
}

const mapStateToProps = ({ auth, users }) => {
  return {
    auth,
    users,
  };
};
export default connect(mapStateToProps)(Main);

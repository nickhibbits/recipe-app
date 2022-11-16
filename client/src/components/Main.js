import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleGetUsers } from "../actions/shared";

import Auth from "./auth/Auth";
import App from "./app/App";

import "../styles/App.scss";

function Main(props) {
  const { dispatch } = props;
  const [authStatus, setAuthStatus] = useState("");

  useEffect(() => {
    dispatch(handleGetUsers());
  }, [dispatch]);

  useEffect(() => {});

  useEffect(() => {
    console.log("authStatus", authStatus);
  }, [authStatus]);

  if (authStatus === "notLoggedIn") {
    return <Navigate to="/auth/login" />;
  }

  if (props.auth.loggedIn === true) {
    return (
      <div className="Main">
        <Routes>
          <Route path="/auth" exact element={<Auth />} />
          <Route path="/app" exact element={<App />} />
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
export default connect(mapStateToProps)(Main);

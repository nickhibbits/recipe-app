import { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { handleGetUsers, handleInitialLogin } from "../../actions/shared";

import CreateUser from "./CreateUser";
import Login from "./Login";

function Auth(props) {
  const { dispatch, auth } = props;
  const { loggedIn } = auth;

  useEffect(() => {
    dispatch(handleGetUsers());
  }, [dispatch]);

  if (loggedIn) {
    return <Navigate to={`/`} />;
  }

  return (
    <div className="auth-component">
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/create-user`} element={<CreateUser />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ users, auth }) => {
  return {
    auth,
    users,
  };
};

export default connect(mapStateToProps)(Auth);

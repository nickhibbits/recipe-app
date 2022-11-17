import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { handleInitialLogin } from "../../actions/shared";

import CreateUser from "./CreateUser";
import Login from "./Login";

function Auth(props) {
  const { dispatch, auth } = props;
  // const { loginStatus, setLoginStatus } = useState(auth.loggedIn);
  const [loginStatus, setLoginStatus] = useState(false);
  let { pathname } = useLocation();

  console.log("loginStatus", loginStatus);

  // useEffect(() => {
  //   dispatch(handleInitialLogin());
  // }, [dispatch]);

  return (
    <div className="auth-component">
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/create-user`} element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default connect()(Auth);

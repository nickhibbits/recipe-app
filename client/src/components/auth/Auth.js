import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import CreateUser from "./CreateUser";
import Login from "./Login";
import NewUserCuisines from "./NewUserCuisines";

function Auth(props) {
  const { auth } = props;
  const { loggedIn } = auth;
  console.log("loggedIn", loggedIn);

  if (loggedIn) {
    return <Navigate to={`/`} />;
  }

  return (
    <div className="auth-component">
      <Routes>
        <Route path={`/`} element={<Login />} />
        <Route path={`/create-user`} element={<CreateUser />} />
        <Route path={`/new-user-cuisines`} element={<NewUserCuisines />} />
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

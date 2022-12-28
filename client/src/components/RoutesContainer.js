import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import Auth from "./auth/Auth";
import App from "./app/App";
import NewUserCuisines from "./auth/NewUserCuisines";

import "../styles/App.scss";

function RoutesContainer() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/auth/*" exact element={<Auth />} />
        <Route
          path={`/new-user-cuisines`}
          exact
          element={<NewUserCuisines />}
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ auth, users }) => {
  return {
    auth,
    users,
  };
};
export default connect(mapStateToProps)(RoutesContainer);

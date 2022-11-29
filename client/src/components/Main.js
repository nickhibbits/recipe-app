import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import Auth from "./auth/Auth";
import App from "./app/App";

import "../styles/App.scss";

function Main() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/auth/*" exact element={<Auth />} />
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
export default connect(mapStateToProps)(Main);

import React from "react";
import { Route, Routes } from "react-router-dom";

import CreateUser from "./CreateUser";
import Login from "./Login";

function Auth() {
  console.log("yooo");
  return (
    <div className="auth-component">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default Auth;

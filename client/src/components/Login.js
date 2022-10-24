import React from "react";

import "../styles/Login.scss";

function Login() {
  return (
    <main className="login-component component">
      <div className="form-wrapper">
        <form action="" className="login-form flex-column">
          <label for="username-input" className="username-label">
            Username
          </label>
          <input type="text" id="username-input" />
          <label className="password-label" for="password-input">
            Password
          </label>
          <input type="text" id="password-input" />
          <button className="submit-button">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Login;

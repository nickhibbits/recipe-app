import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { setAuth } from "../actions/auth";

import "../styles/Login.scss";

function Login(props) {
  const [username, setUsername] = useState();
  const usernameInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username", username);
    props.dispatch(setAuth(username));
    props.setAuth();
  };

  return (
    <main className="login-component component">
      <div className="form-wrapper flex">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="login-form flex-column"
        >
          <div className="form-field-wrapper">
            <label className="username-label">Username</label>
            <input
              ref={usernameInput}
              type="text"
              id="username-input"
              onChange={() => setUsername(usernameInput.current.value)}
            />
          </div>
          <div className="form-field-wrapper">
            <label className="password-label">Password</label>
            <input type="text" id="password-input" />
          </div>
          <input type="submit" className="submit-button" value="Submit" />
        </form>
      </div>
    </main>
  );
}

export default connect()(Login);

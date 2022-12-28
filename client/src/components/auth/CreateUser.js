import React from "react";

import { useRef, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleCreateUser } from "../../actions/users";

import "../../styles/AuthForms.scss";

function CreateUser(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      password,
    };
    props.dispatch(handleCreateUser(newUser));
    return navigate("/");
  };

  return (
    <main className="create-user-component component">
      <div className="form-wrapper flex">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="login-form flex-column"
        >
          <div className="form-field-wrapper">
            <label className="username-label">Add Username</label>
            <input
              ref={usernameInput}
              type="text"
              id="username-input"
              onChange={() => setUsername(usernameInput.current.value)}
            />
          </div>
          <div className="form-field-wrapper">
            <label className="password-label">Password</label>
            <input
              ref={passwordInput}
              type="text"
              id="password-input"
              onChange={() => setPassword(passwordInput.current.value)}
            />
          </div>
          <input
            type="submit"
            className="button submit-button"
            value="Submit"
          />
        </form>
      </div>
    </main>
  );
}

export default connect()(CreateUser);

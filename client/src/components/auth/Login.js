import { useRef, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuth } from "../../actions/auth";

import "../../styles/AuthForms.scss";

function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const usernameInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!props.users.allIds.find((user) => username === user)) {
      alert('❌ Username doesn\'t exist, click "Create" account to begin.');
    }

    if (props.users.byId[username].password !== password) {
      alert("❌ Username doesn't match password -- Try again");
    }

    if (props.users.byId[username].password === password) {
      props.dispatch(setAuth({ user: username, loggedIn: true }));
    }
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
            <input
              ref={passwordInput}
              type="text"
              id="password-input"
              onChange={() => setPassword(passwordInput.current.value)}
            />
          </div>
          <div className="buttons-wrapper">
            <input
              type="submit"
              className="button submit-button"
              value="Submit"
            />
            <Link to={"/auth/create-user"}>
              <input
                type="submit"
                className="button create-account-button"
                value="Create"
              />
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};
export default connect(mapStateToProps)(Login);

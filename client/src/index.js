import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";

import Main from "./components/Main";
import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

// TODO
// 1. React Router refacotor:
// Distinguish protected App routes from /login and /create-user urls to yeild usual browser behavior -- rather than relying component state changes

// 2. Redux auth flow
// Decide how to best initialize redux store from login screen to entering app
// all data all at once?
// just users and auth status, then upon entering app, load remaining data?

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

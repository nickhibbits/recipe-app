import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";

import Main from "./components/Main";
import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Documentation Notes
// Login Flow
// React-Router usage

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

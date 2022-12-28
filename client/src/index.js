import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";

import RoutesContainer from "./components/RoutesContainer.js";
import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Documentation Notes
// 1. Login Flow
// React-Router usage

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  </Provider>
);

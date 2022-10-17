import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import middleware from "./middleware";

export const store = configureStore({ reducer, middleware });

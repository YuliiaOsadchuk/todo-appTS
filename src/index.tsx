import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";
import store from "./store/store";
import App from "./App";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(app, document.getElementById("root"));

const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof rootReducer>;

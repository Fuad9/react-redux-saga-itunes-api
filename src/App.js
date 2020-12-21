import React from "react";
import { Provider } from "react-redux";

import "./App.css";

import store from "./store";
import Routes from "./Routes";

export default () => (
   <Provider store={store}>
      <Routes />
   </Provider>
);

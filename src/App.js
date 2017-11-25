import React from "react";

import "./App.css";

import { MingdayAppContainer } from "./containers/MingdayAppContainer";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <MingdayAppContainer />
  </Provider>
);

export default ReduxApp;

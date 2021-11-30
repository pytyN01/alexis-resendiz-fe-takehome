import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

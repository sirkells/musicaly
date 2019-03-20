import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import App from "./components/App";
import { searchArtist } from "./reducers";
import "./index.css";

// logger is a middleware that logs the changes in our redux store
const logger = createLogger();
const store = createStore(searchArtist, applyMiddleware(logger));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

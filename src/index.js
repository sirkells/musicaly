import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import App from "./components/App";
import { changeSearchTerm, searchForArtist } from "./reducers";
import "./index.css";

// logger is a middleware that logs the changes in our redux store
const logger = createLogger();
const rootreducers = combineReducers({ changeSearchTerm, searchForArtist });
const store = createStore(
  rootreducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

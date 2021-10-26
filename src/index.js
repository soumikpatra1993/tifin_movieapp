import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import "./assets/css/app.scss";
import Home from "./components/Home.jsx";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,

  document.getElementById("root")
);
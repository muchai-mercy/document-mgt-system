import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import routes from "./Routes.js";
import "./styles/styles.scss";
import "../node_modules/materialize-css/dist/css/materialize.min.css";

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
document.getElementById('app')

);

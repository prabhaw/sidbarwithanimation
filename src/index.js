import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
const routed_app = (
  <Router>
    <Layout />
  </Router>
);
ReactDOM.render(routed_app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

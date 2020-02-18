import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";
import FileTypeDetectionSwag from "./components/fileTypeDetectionSwag";

import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

var Root = () => {
  return (
  <Router basename='/'>
    <Switch>
    <Route path="/drop"><App /></Route>
    <Route><FileTypeDetectionSwag /></Route>
    </Switch>
  </Router>);
}

ReactDOM.render(<Root />, document.getElementById("root"));

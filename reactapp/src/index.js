import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Layout from "./components/shared/Layout";
import DropApp from "./components/drop/DropApp";
import FileTypeDetectionSwag from "./components/swagger/fileTypeDetectionSwag";

import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

var Root = () => {
  return (
  <Router basename='/'>
    <Switch>
    <Route path="/drop"><DropApp /></Route>
    <Route><FileTypeDetectionSwag /></Route>
    </Switch>
  </Router>);
}

ReactDOM.render(<Root />, document.getElementById("root"));

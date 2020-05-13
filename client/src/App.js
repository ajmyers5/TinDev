import React from "react";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import GithubPage from "./pages/GithubPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/dev/:id" component={LandingPage} />
        <Route path="/githubuser/:id" component={GithubPage} />
      </Switch>
    </Router>
  );
}

export default App;

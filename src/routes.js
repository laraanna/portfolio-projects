import React, { Component } from "react";
import { Route } from "react-router-dom";
import LandingPage from "./portfolio/LandingPage";
import ProjectPage from "./portfolio/ProjectPage";
import About from "./portfolio/About";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects/:projectId" component={ProjectPage} />
      </div>
    );
  }
}

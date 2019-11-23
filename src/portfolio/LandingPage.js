import React, { PureComponent } from "react";
import "./LandingPage.css";
import TextBlock from "../components/TextBlock";
import ProjectContainer from "./ProjectContainer";
import projects from "../fixtures/projects";

class LandingPage extends PureComponent {
  render() {
    return (
      <div className="LandingPage">
        <h3>
          Lara Wagner
        </h3>
        <ProjectContainer projects={projects} />
      </div>
    );
  }
}

export default LandingPage;

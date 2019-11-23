import React, { PureComponent } from "react";
import "./ProjectContainer.css";
import Project from "./Project";

class ProjectContainer extends PureComponent {
  renderProject(project, index) {
    return <Project key={index} {...project} />;
  }
  render() {
    return (
      <div className="ProjectContainer">
        <main>{this.props.projects.map(this.renderProject)}</main>
      </div>
    );
  }
}

export default ProjectContainer;

import React, { PureComponent } from "react";
import "./Project.css";
import Title from "../components/Title";
import { Link } from "react-router-dom";

class Project extends PureComponent {
  render() {
    const { _id, photo, title, subtitle, year } = this.props;
    return (
      <div className="Project">
        <Link to={`/projects/${_id}`}>
          <Title content={title} />
          <p>
            {subtitle}, <span>{year}</span>
          </p>
          <img alt="overlay" src={photo} />
        </Link>
      </div>
    );
  }
}

export default Project;

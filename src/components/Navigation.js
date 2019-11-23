import React, { PureComponent } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import icon from "../images/icon.png";


class Navigation extends PureComponent {
  render() {
    return (


      <div className="Navigation">
        <Link to="/">
          <div className="Icon">
            <img alt="brain" src={icon} />
          </div>
        </Link>

        <Link to="/about">
          <div className="Profile">
            About
          </div>
        </Link>

      </div>
    );
  }
}

export default Navigation;

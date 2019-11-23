import React, { PureComponent } from "react";
import "./Title.css";

class Title extends PureComponent {
  render() {
    const { content } = this.props;
    return <h1 className="Title">{content}</h1>;
  }
}

export default Title;

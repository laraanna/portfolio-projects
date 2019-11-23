import React, { PureComponent } from "react";
import "./TextBlock.css";

class TextBlock extends PureComponent {
  render() {
    const { content } = this.props;
    return <h1 className="TextBlock">{content}</h1>;
  }
}

export default TextBlock;

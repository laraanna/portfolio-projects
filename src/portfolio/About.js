import React, { PureComponent } from "react";
import "./About.css";
import { Route, Redirect } from "react-router";

class About extends PureComponent {

  render() {
    const linkedin_profile =
      "https://www.linkedin.com/in/lara-anna-wagner-8446789a/";
    const github_profile = "https://github.com/laraanna";
    const email = "mailto:lara@laraannawagner.com?Subject=Hello";
    return (
      <div className="About">
        <div>
          <h1>
            Hi, I am Lara.{" "}
          </h1>
          <h1>
            An <i>EdTech</i> student with a background in <i>Arts &amp; Technology</i>.
            I have worked as a <i>front-end developer</i> developing interactive tools that make research more intuitive and fun - exploring how to drive human engagement through digital tools.
            I am passionate about developing for <i>educational and fun</i> purposes and interested in how technological <i>innovations change the way we learn and work</i>. I would love to hear from you and share thoughts. Contact me by <u><a href={email} target="_top">
            mail</a></u> or simply visit me on <u><a href={linkedin_profile} target="_blank" rel="noopener noreferrer">linkedin</a></u> or <u><a href={github_profile} target="_blank" rel="noopener noreferrer">github</a></u>.
          </h1>
        </div>

      </div>
    );
  }
}

export default About;

import React, { PureComponent } from "react";
import projects from "../fixtures/projects";
import TextBlock from "../components/TextBlock";
import "./ProjectPage.css";

class ProjectPage extends PureComponent {
  render() {
    const project = projects.filter(
      p => p._id === this.props.match.params.projectId
    )[0];
    const {
      title,
      description,
      subtitle,
      role,
      client,
      video,
      statement,
      photo_1,
      photo_2,
      team,
      image1,
      image2,
      image3,
      image4,
      grid1,
      grid2,
      grid3,
      grid4,
      mainImage,
      color,
    } = project;

    let cast = null;
    let collab = null;
    let mainVideo = null;
    if (statement !== "") {
      cast = (
        <video className="video-second" autoPlay loop muted={this.props.muted}>
          <source src={statement} type="video/mp4" />
        </video>
      );
    } else if (photo_1 !== ""){
      cast = <img className="GalleryRight" src={photo_1} />;
    }

    if (video !== "") {
      mainVideo = (
        <div className="video">
          <div className="aspectRatio">
            <iframe
              src={video}
              width="640"
              height="360"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen="true"
            />
          </div>
        </div>
      );
    } else {
      mainVideo = <img alt="main" className="mainImage" src={mainImage} />;
    }


    if (team !== undefined) {
      collab = <h2>{`Team: ${team}`}</h2>;
    }
    return (
      <div className="ProjectPage">
        <h1 className="Header">
          {title}
        </h1>
        <h1 className="Header Sub" >
          {subtitle.split(" ").map(letter => (<div style={{backgroundColor: color}}>{letter}</div>))}
        </h1>
        <TextBlock content={description} />
        <div className="SubText">
          <h2>{`For: ${client}`} </h2>
          <h2>{`Role: ${role}`} </h2>
          {collab}
        </div>
        <div className="WrapperVisuals">
        {mainVideo}

        <img alt="img_2" src={photo_2} />


        {cast}


        <div className="fullWidth">
        <div className="grid">
          <img src={grid1} />
          <img src={grid2} />
          <img src={grid3} />
          <img src={grid4} />
        </div>
        </div>

          <img src={image1} />
          <img src={image2} />
          <img src={image3} />
          <img src={image4} />
  </div>



      </div>
    );
  }
}

export default ProjectPage;

import React from "react";
import "../../styles/imageSlider.scss";
import { Link } from "react-router-dom";

export default function ImageSliderJavascript() {
  return (
    <div className="main">
      <div id="project_1" className="project">
        <Link to="/project1">
          <img src="./img/---.jpg" className="img" alt="Js1" />
          <div className="overlay overlay--blur">
            <h1 className="titel">JavaScript</h1>
            <p className="description">Self project</p>
          </div>
        </Link>
      </div>
      <div id="project_2" className="project">
        <img src="./img/---.jpg" className="img" alt="Js2" />
        <div className="overlay overlay--blur">
          <h1 className="titel">JavaScript</h1>
          <p className="description">Self project</p>
        </div>
      </div>
      <div id="project_3" className="project">
        <img src="./img/---.jpg" className="img" alt="Js3" />
        <div className="overlay overlay--blur">
          <h1 className="titel">JavaScript</h1>
          <p className="description">Self project</p>
        </div>
      </div>
      <div id="project_4" className="project">
        <img src="./img/---.jpg" className="img" alt="Js4" />
        <div className="overlay overlay--blur">
          <h1 className="titel">JavaScript</h1>
          <p className="description">Self project</p>
        </div>
      </div>
    </div>
  );
}

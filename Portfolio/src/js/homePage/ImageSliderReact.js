import React from "react";
import "../../styles/imageSlider.scss";

export default function ImageSliderReact() {
  return (
    <div className="main">
      <div id="project_1" className="project">
        <a href="/project1.html">
          <img src="./img/---.jpg" className="img" alt="Js1" />
          <div className="overlay overlay--blur">
            <h1 className="titel">React</h1>
            <p className="description">Self project</p>
          </div>
        </a>
      </div>
      <div id="project_2" className="project">
        <img src="./img/---.jpg" className="img" alt="Js2" />
        <div className="overlay overlay--blur">
          <h1 className="titel">React</h1>
          <p className="description">Self project</p>
        </div>
      </div>
      <div id="project_3" className="project">
        <img src="./img/s3.jpg" className="img" alt="Js3" />
        <div className="overlay overlay--blur">
          <h1 className="titel">React</h1>
          <p className="description">Self project</p>
        </div>
      </div>
      <div id="project_4" className="project">
        <img src="./img/---.jpg" className="img" alt="Js4" />
        <div className="overlay overlay--blur">
          <h1 className="titel">React</h1>
          <p className="description">Self project</p>
        </div>
      </div>
    </div>
  );
}

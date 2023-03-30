import React from "react";
import ImageSliderJavascript from "./ImageSliderJavascript";
import ImageSliderReact from "./ImageSliderReact";
import "../../styles/portfolio.scss";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="jsP">
        <div id="titel">
          <h1>JavaScript Projects</h1>
        </div>
        <ImageSliderJavascript />
      </div>
      <div className="rjP">
        <div id="titel">
          <h1>React Projects</h1>
        </div>
        <ImageSliderReact />
      </div>
    </section>
  );
}

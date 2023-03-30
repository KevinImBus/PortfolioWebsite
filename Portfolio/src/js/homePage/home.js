import React from "react";
import Navigation from "./Navigation";
import Will from "./Will";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import "../../fonts/fonts.scss";
import "../../styles/home.scss";

export default function Home() {
  return (
    <div className="body">
      <Navigation />
      <Will />
      <Portfolio />
      <Contact />
    </div>
  );
}

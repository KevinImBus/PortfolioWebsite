import React, { useState } from "react";
import { Link } from "react-scroll";
import "../../styles/nav.scss";
import burgerMenu from "../../svg/burgerMenu.svg";
import close from "../../svg/Close.svg";
import navUp from "../../svg/Up_w.svg";

export default function Navigation() {
  const [isSignUp, setSignUp] = useState(true);

  return (
    <nav id="nav">
      <img
        id="button1"
        onClick={() => setSignUp(false)}
        src={burgerMenu}
        alt="burgerMenu"
      />
      <div id="nav" className={isSignUp ? "closed" : "active"}>
        <div
          id="navBox"
          className={isSignUp ? "boxClosed" : "boxActive"}
          onClick={() => setSignUp(false)}
        ></div>
        <Link to="willkommen" smooth={true} duration={800}>
          <img id="navUp" src={navUp} alt="Up" />
        </Link>
        <img
          className="close"
          onClick={() => setSignUp(true)}
          src={close}
          alt="Close"
        />
        <div id="box2"></div>
        <div className="navbarLinks">
          <ul>
            <div id="box1">
              <li>
                <Link
                  to="portfolio"
                  className="navItems"
                  smooth={true}
                  duration={800}
                  onClick={() => setSignUp(true)}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="navItems"
                  smooth={true}
                  duration={800}
                  onClick={() => setSignUp(true)}
                >
                  CONTACT
                </Link>
              </li>
            </div>
            <div>
              <li>
                <a href="/imprint.html" className="Imp">
                  Imprint
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

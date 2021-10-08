import React, { useState } from "react";
import "../NavBar/NavBar.css";
import ToggleButton from "./ToggleButton/ToggleButton";

const NavBar = (props) => {
  const [navbar, SetNavbar] = useState(false);
  const [buttonToggled, SetButton] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      SetNavbar(true);
    } else {
      SetNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBackground);

  const toggle = () => {
    buttonToggled ? SetButton(false) : SetButton(true);
  }

  return (
    <nav className={navbar ? "nav scrolled" : "nav"}>
      <a className="nav-brand" href="#header">
        <span className="nav-brand-club">KLUB</span>DORA...
      </a>
      <ToggleButton toggleBtn={toggle} />
      <div
        className={buttonToggled ? "nav-headers active" : "nav-headers"}
        onClick={toggle}
      >
        <ul>
          <li>
            <a href=" #header">Start</a>{" "}
          </li>
          <li>
            <a href="#about">O mnie</a>{" "}
          </li>
          <li>
            <a href="#oferta">Oferta</a>{" "}
          </li>
          <li id="nav-kontakt">
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

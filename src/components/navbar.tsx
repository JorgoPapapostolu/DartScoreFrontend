import React from "react";
import github from "../img/footericons/github.png";
import linkedin from "../img/footericons/linkedin.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          DartScore - Hit a 180!
        </a>
        <div className="navbar-menu">
          <div className="navbar-user">
            <a
              href="https://www.linkedin.com/in/jorgos-papapostolu/"
              className="navbar-menu-item"
            >
              <img src={linkedin} alt="linkedinicon" />
            </a>
            <a
              href="https://github.com/JorgoPapapostolu"
              className="navbar-menu-item"
            >
              <img src={github} alt="githubicon" />
            </a>
          </div>
          <div className="navbar-divier">
            <button className="navbar-user-button">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import github from "../../img/navbaricons/github.png";
import linkedin from "../../img/navbaricons/linkedin.png";

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
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedinicon" />
            </a>
            <a
              href="https://github.com/JorgosPapapostolu"
              className="navbar-menu-item"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="githubicon" />
            </a>
          </div>
          <div className="navbar-divier">
          <Link to="/login" className="navbar-user-button">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

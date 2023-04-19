import React from "react";
import { Link } from "react-router-dom";
import github from "../../img/navbaricons/github.png";
import linkedin from "../../img/navbaricons/linkedin.png";
import { useAuth } from "../loginpage/auth";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
  }

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
              href="https://github.com/JorgoPapapostolu"
              className="navbar-menu-item"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="githubicon" />
            </a>
          </div>
          <div className="navbar-divier">
            {!isAuthenticated && (
              <Link to="/login" className="navbar-user-button">
                Login
              </Link>
            )}
            {isAuthenticated && (
              <Link to="/" onClick={handleLogout} className="navbar-user-button">
                Abmelden
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

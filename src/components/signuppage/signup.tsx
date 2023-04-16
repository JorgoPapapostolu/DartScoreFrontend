import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export default function Signup() {

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Registriere dich noch heute!</h2>
        <div className="form-group-signup">
          <label htmlFor="firstname">Vorname</label>
          <input
            type="text"
            id="firstname"
            required
          />
        </div>
        <div className="form-group-signup">
          <label htmlFor="lastname">Nachname</label>
          <input
            type="text"
            id="lastname"
            required
          />
        </div>
        <div className="form-group-signup">
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            required
          />
        </div>
        <div className="form-group-signup">
          <label htmlFor="password">Passwort</label>
          <input
            type="password"
            id="password"
            required
          />
        </div>
        <button type="submit" className="btn">
          Registrieren
        </button>
        <div className="form-footer">
          <Link to="/login">Schon angemeldet? Jetzt anmelden</Link>
        </div>
      </form>
    </div>
  );
};


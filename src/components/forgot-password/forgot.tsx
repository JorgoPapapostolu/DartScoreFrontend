import React from "react";
import "./forgot.css";
import { Link } from "react-router-dom";

export default function Forgot() {

  return (
    <div className="forgot-container">
      <form className="forgot-form">
        <h2>Passwort vergessen?</h2>
        <div className="form-group-forgot">
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            required
          />
        </div>
        <button type="submit" className="btn">
          Passwort anfordern
        </button>
        <div className="form-footer">
          <Link to="/login">Passwort eingefallen? Jetzt anmelden</Link>
        </div>
      </form>
    </div>
  );
};


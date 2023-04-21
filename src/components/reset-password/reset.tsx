import React from "react";
import "./reset.css";
import { Link } from "react-router-dom";

export default function Reset() {

  return (
    <div className="reset-container">
      <form className="reset-form">
        <h2>Passwort zurücksetzen</h2>
        <div className="form-group-reset">
          <label htmlFor="password">Neues Passwort</label>
          <input
            type="password"
            id="password"
            required
          />
        </div>
        <button type="submit" className="btn">
          Passwort zurücksetzen
        </button>
        <div className="form-footer">
          <div>Bitte merken 😉</div>
        </div>
      </form>
    </div>
  );
};


import React from "react";
import "./login.css";
import Google from '../../img/loginicons/google.png';

export default function Login() {

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Willkommen!</h2>
        <div className="form-group">
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort</label>
          <input
            type="password"
            id="password"
            required
          />
        </div>
        <button type="submit" className="btn">
          Anmelden
        </button>
        <div className="form-footer">
          <a href="/signup">Noch kein Konto? Jetzt registrieren</a>
          <a href="/forgot-password">Passwort vergessen?</a>
        </div>
        <div className="google-login">
            <p>Einfache Anmeldung mit</p>
            <a href="#" className="btn-google">
                <img src={Google} alt="googleIcon"/>
                Google
            </a>
        </div>
      </form>
    </div>
  );
};


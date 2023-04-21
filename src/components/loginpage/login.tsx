import React, { FormEvent, useState } from "react";
import "./login.css";
import Google from "../../img/loginicons/google.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth"; 

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("https://fluffy-fly-bedclothes.cyclic.app/user/login", formData)
      .then((response) => {
        console.log(response.data);
        setIsAuthenticated(true);
        navigate("/dashboard");
      })
      .catch((error) => {
        alert("Falsche Benutzerdaten!");
      });
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Willkommen!</h2>
        <div className="form-group">
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Passwort</label>
          <input
            type="password"
            id="password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn">
          Anmelden
        </button>
        <div className="form-footer">
          <Link to="/signup">Noch kein Konto? Jetzt registrieren</Link>
          {/* <a href="/forgot-password">Passwort vergessen?</a> */}
        </div>
        <div className="google-login">
          <p>Einfache Anmeldung mit</p>
          <a href="#" className="btn-google">
            <img src={Google} alt="googleIcon" />
            Google
          </a>
        </div>
      </form>
    </div>
  );
};

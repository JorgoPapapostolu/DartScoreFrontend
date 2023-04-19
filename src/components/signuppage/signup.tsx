import React, { FormEvent, useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface SignupFormData {
  vorname: string;
  nachname: string;
  email: string;
  password: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<SignupFormData>({
    vorname: "",
    nachname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("https://fluffy-fly-bedclothes.cyclic.app/user/signup", formData)
      .then((response) => {
        console.log(response.data);
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
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
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Registriere dich noch heute!</h2>
        <div className="form-group-signup">
          <label htmlFor="vorname">Vorname</label>
          <input
            type="text"
            id="vorname"
            required
            value={formData.vorname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-signup">
          <label htmlFor="nachname">Nachname</label>
          <input
            type="text"
            id="nachname"
            required
            value={formData.nachname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-signup">
          <label htmlFor="email">E-Mail-Adresse</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group-signup">
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
          Registrieren
        </button>
        <div className="form-footer">
          <Link to="/login">Schon angemeldet? Jetzt anmelden</Link>
        </div>
      </form>
    </div>
  );
}

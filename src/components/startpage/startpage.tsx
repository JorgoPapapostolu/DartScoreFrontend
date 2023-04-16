import React from "react";

export default function StartPage() {
  return (
    <div className="startpage-container">
      <h1 className="heading-primary">
        Bring <span className="highlighted-text">dein</span> Dartspiel auf die nächste Stufe!
      </h1>
      <p className="subtitle">
        Dein Dartspiel ist nur so gut wie deine Konzentration. - DartScore nimmt
        dir die Mühe des Punktezählens ab, damit du dich voll und ganz auf dein
        Spiel konzentrieren kannst.
      </p>
      <p className="description">
        DartScore ist einfach zu bedienen und immer auf dem neuesten Stand. Wir
        helfen dir, dein Dartspiel auf die nächste Stufe zu bringen!
      </p>
      <h2 className="heading-secondary">Features</h2>
      <ul className="feature-list">
        <li>Punktezähler für alle Arten von Dartspielen</li>
        <li>Spielstatistiken und -historie</li>
      </ul>
      <button className="cta-button">Jetzt registrieren</button>
    </div>
  );
}

import React from "react";
import { Link } from 'react-router-dom';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="heading-primary">
        Das <span className="highlighted-text">DartScore</span> Dashboard!
      </h1>
    </div>
  );
}

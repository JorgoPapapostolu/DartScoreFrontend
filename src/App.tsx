import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/startpage/startpage";
import Navbar from "./components/startpage/navbar";
import Footer from "./components/startpage/footer";
import Login from "./components/loginpage/login";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/startpage/startpage";
import Navbar from "./components/startpage/navbar";
import Footer from "./components/startpage/footer";
import Login from "./components/loginpage/login";
import Signup from './components/signuppage/signup';
import Forgot from './components/forgot-password/forgot';
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgot />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;

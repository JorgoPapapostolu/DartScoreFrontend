import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import StartPage from "./components/startpage/startpage";
import Navbar from "./components/startpage/navbar";
import Footer from "./components/startpage/footer";
import Login from "./components/loginpage/login";
import Signup from "./components/signuppage/signup";
import Forgot from "./components/forgot-password/forgot";
import Dashboard from "./components/dashboard/dashboard";
import { AuthProvider, useAuth } from "./components/loginpage/auth";

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<Forgot />} />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

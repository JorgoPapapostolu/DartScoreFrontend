import React from 'react';
import './App.css';
import StartPage from './components/startpage';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StartPage />
      <Footer />
    </div>
  );
}

export default App;

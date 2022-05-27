import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';







function App() {
  return (

    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
         
        </Routes>
      </div>
      <Footer />
    </Router>


  );
}

export default App;
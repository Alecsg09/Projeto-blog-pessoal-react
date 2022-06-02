import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastrousuario/CadastroUsuario';
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';







function App() {
  return (

    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario/>} />
          <Route path="/temas" element={<ListaTema/>} />
          <Route path="/postagens" element={<ListaPostagem/>} />
         
        </Routes>
      </div>
      <Footer />
    </Router>


  );
}

export default App;
import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import Footer from './componentes/estaticos/footer/Footer';
import Navbar from './componentes/estaticos/navbar/Navbar';



function App() {
  return (
   <>
   <Navbar/>
     <Home />     
   <Footer/>
   

   </>
  );
}

export default App;
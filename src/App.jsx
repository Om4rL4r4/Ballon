import '../src/index.css';
import Home from '../Pages/Home.jsx'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servicios from '../Pages/Servicios';
import Consultoria from '../Pages/Consultoria.jsx';
import Auditoria from '../Pages/Auditoria.jsx';
import Modelos from '../Pages/Modelos.jsx';
import Mkt from '../Pages/Mkt.jsx';
import Reclutamiento from '../Pages/Reclutamiento.jsx';
import Noticias from '../Pages/Noticias.jsx'
import Proyectos from '../Pages/Proyectos.jsx'
import Cotizar from '../Pages/Cotizar.jsx'




function App() {
 return(
  
<Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Consultoria" element={<Consultoria />} />
        <Route path='/Auditoria' element={<Auditoria/>} />
        <Route path='/Modelos' element={<Modelos/>} />
        <Route path='/Marketing-digital' element={<Mkt/>} />
        <Route path='/Reclutamiento' element={<Reclutamiento/>} />
        <Route path='Noticias'element={<Noticias/>} />
        <Route path='Proyectos'element={<Proyectos/>} />
        <Route path='Cotizar'element={<Cotizar/>} />

      </Routes>
</Router>

 )
};

export default App;

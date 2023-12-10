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
import Acerca from '../Pages/Acerca-de.jsx'
import Trabaja from '../Pages/Trabaja-con-nosotros.jsx'
import Contactanos from '../Pages/Contactanos.jsx'
import Aviso from '../Pages/Aviso-de-privacidad.jsx'
import TyC from '../Pages/Terminos-y-condiciones.jsx'
import Cookies from '../Pages/Politicas-de-cookies.jsx'
import Adquisicion from '../Pages/Adquisicion.jsx'
import Big from '../Pages/Big.jsx'
import IA from '../Pages/IA.jsx'
import Machine from '../Pages/Machine.jsx'
import Transformacion from '../Pages/Transformacion.jsx'





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
        <Route path='/Noticias' element={<Noticias/>} />
        <Route path='/Proyectos' element={<Proyectos />} />
        <Route path='/Cotizar' element={<Cotizar/>} />
        <Route path='/Acerca-de' element={<Acerca/>} />
        <Route path='/Contactanos' element={<Contactanos />} />
        <Route path='/Aviso-de-privacidad' element={<Aviso />} />
        <Route path='/Trabaja-con-nosotros' element={<Trabaja />} />
        <Route path='/Terminos-y-condiciones' element={<TyC />} />
        <Route path='/Politicas-de-cookies' element={<Cookies />} />
        <Route path='/Adquisicion' element={<Adquisicion />} />
        <Route path='/Big' element={<Big />} />
        <Route path='/IA' element={<IA />} />
        <Route path='/Machine' element={<Machine />} />
        <Route path='/Transformacion' element={<Transformacion />} />


      </Routes>
</Router>


 )
};

export default App;

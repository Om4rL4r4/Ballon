import '../src/assets/Css/Proyectos.css';
import MainBar from '../Components/MainBar.jsx';
import MainText from '../Components/MainText.jsx';
import video from '../src/assets/Video/pexels.mp4';
import Footer from '../Components/Footer.jsx';
import LeftBar from '../Components/LeftBar.jsx';
import React from 'react';
import Gradiente from '../src/assets/Images/pexels-img.png';

function Proyectos() {
 return(
  <div className='whole'>
    <MainBar />
    <MainText />
    <LeftBar />
    <div className='seg'>

    </div>
    <Footer />
    <video src={video} autoPlay muted loop poster={Gradiente}></video>
  </div>
  

 )
}

export default Proyectos;
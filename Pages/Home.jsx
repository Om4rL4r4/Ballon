import '../src/index.css';
import MainBar from '../Components/MainBar.jsx';
import MainText from '../Components/MainText.jsx';
import video from '../src/assets/Video/video.mp4';
import Footer from '../Components/Footer.jsx';
import LeftBar from '../Components/LeftBar.jsx';
import React from 'react';
import Gradiente from '../src/assets/Images/Gradient-img.png'

function Home() {
 return(
  <div className='whole'>
    <MainBar />
    <MainText />
    <LeftBar />
    <Footer />
    <video src={video} autoPlay muted loop poster={Gradiente}></video>
  </div>
  

 )
}

export default Home;

import '../src/assets/Css/Mkt.css';
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';
import video from '../src/assets/Video/Blur-consultoria.mp4'
import imag from '../src/assets/Images/Blur-img.png';
import Flower from '../src/assets/Images/Flor.png'

function Mkt(){
    return(
        <div className='mktMain'>
        <p className='mktTitle'>MARKETING DIGITAL</p>
        <p className='mktText'>
        En la intersección del mundo físico y digital, Balloon Consulting crea magia. No somos simplemente estrategas; somos magos del marketing, fusionando realidades y superando expectativas. Ya sea potenciando tu presencia con SEO/ASO, creando campañas impactantes o implementando estrategias omnicanal, te llevamos de la mano en este emocionante viaje.<br/><br/> 
        Bajo un concepto Phygital construimos tu estrategia de marketing uniendo el mundo físico con el digital potenciando el mismo. No somos estrategas comunes, somos estrategas innovadores, disruptivos y listos para evolucionar tus kpis de mercadotecnia y crecimiento de negocio. <br/><br/>
        <span>
        · SEO/ASO <br/>
        · SEM <br/>
        · RRSS <br/>
        · APP/ Web <br/>
        · Estrategia Omnicanal <br/>
        · Growth Marketing <br/>
        · Growth Hacking<br/>
        </span>
        

        </p>
        <img src={Flower} className='Flower'/>
        <MainBar />
        <LeftBar />
        <Footer />
        <video src={video} autoPlay muted loop poster={imag} className='vid-mkt'></video>

    </div>

    )
}

export default Mkt;
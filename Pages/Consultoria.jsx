import '../src/assets/Css/Consultoria.css';
import vid from '../src/assets/Video/Blur-consultoria.mp4';
import imag from '../src/assets/Images/Blur-consultoria-img.png'
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';
import figura from '../src/assets/Images/Blur-img.png'

function Consultoria(){
    return(
        <>
        <p className='consul'>CONSULTORÍA</p>
        <p className='MainText'>

        Imagínate un mundo donde cada paso que das en el terreno digital esté respaldado por expertos. 
        <br/>Balloon Consulting es tu guía, acompañándote en tu viaje, diseñando e implementando las tecnologías más avanzadas para llevar tu negocio al próximo nivel.
        Juntos, soñamos, planificamos y hacemos realidad tu transformación digital. <br/><br/>
        Si estás listo para evolucionar tu negocio, para encontrar nuevos modelos de monetización e innovación, el grupo de expertos que formamos parte de Balloon puede acompañarte a imaginar, diseñar e implementar las últimas tecnologías para la Transformación Digital de tu negocio. <br/><br/>
        · Estrategia y Operación Transformación Digital <br/>
        · Modelos Analítica Avanzada
        </p>
        <img src={figura} className='figura'/>
        <MainBar />
        <LeftBar />
        <Footer />
        <video src={vid} autoPlay muted loop poster={imag}></video>

    </>
    )

}

export default Consultoria;
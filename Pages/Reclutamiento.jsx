import '../src/assets/Css/Reclutamiento.css';
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';
import video from '../src/assets/Video/Blur-consultoria.mp4'
import imag from '../src/assets/Images/Blur-img.png';
import figura from '../src/assets/Images/Balls.png'

function Reclutamiento(){
    return(
        <>
        <p className='consul'>RECLUTAMIENTO DE<br/>EQUIPOS DE ALTO DESEMPEÑO<br/>PARA DIGITAL</p>
        <p className='MainText'>
        La magia no está completa sin el equipo adecuado. 
        Con años de experiencia en corporativos globales, Balloon Consulting conoce la fórmula para construir equipos estelares. 
        Te ayudamos a cerrar la brecha digital, asegurándonos de que no solo tengas la estrategia correcta, sino también las mentes brillantes para llevarla a cabo. 
        <br/><br/>
        Nuestro equipo formó parte de grandes corporativos globales, lo que los hace expertos en selección y formación de equipos especializados con habilidades digitales. 
        Es importante que cualquier estrategia esté acompañada del mejor talento que le de continuidad a los planes hacia el interior de la organización, por ello ponemos a tu disposición varias formas de poner a tu equipo o especialización up & running, lo que acortará la brecha de adopción digital.


        </p>
        <img src={figura} className='figura'/>
        <MainBar />
        <LeftBar />
        <Footer />
        <video src={video} autoPlay muted loop poster={imag}></video>

    </>

    )
}

export default Reclutamiento;
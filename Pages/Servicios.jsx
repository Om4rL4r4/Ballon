import '../src/assets/Css/ServiciosStyle.css';
import Colorful from '../src/assets/Video/Colorful.mp4';
import Gradient from '../src/assets/Images/Gradient-img.png'
import Footer from '../Components/Footer';
import LeftBar from '../Components/LeftBar';
import MainBar from '../Components/MainBar';
import Opciones from '../Components/Opciones';


function Servicios(){
    return (
        <>
            <MainBar />
            <LeftBar />
            <Opciones />
            
            <div className="opti">
            <ul>
                <li>Acerca de</li>
                <li>Trabaja con Nosotros</li>
                <li>Contáctanos</li>
                <li>Aviso de Privacidad</li>
                <li>Términos y Condiciones</li>
                <li>Política de Cookies</li>
            </ul>
        </div>
            
            <video src={Colorful} autoPlay muted loop poster={Gradient} className='videito'></video>
            
        </>
    )
}

export default Servicios;
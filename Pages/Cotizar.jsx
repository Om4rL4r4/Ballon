import '../src/assets/Css/Cotizar.css';
import vidCotizar from '../src/assets/Video/Blur-consultoria.mp4';
import Blurimag from '../src/assets/Images/Blur-consultoria-img.png'
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';

function Cotizar(){
    return(
        <div className='cotizarMain'>
        <p className='cotizarTitle'>¿TU EMPRESA NECESITA ALGUNO DE NUESTROS SERVICIOS?</p>
        <p className='cotizarText'>¡Gracias por tu interés! Completa el formulario para que nos pongamos en contacto contigo cuanto antes. 
        Para el resto de consultas envíalas a Contáctanos.<br/>
        Si quieres trabajar con nosotros, envía tu información a través de Careers.
        </p>
        <div className='formCotizar'></div>
            <p className='nombreCotizar'>NOMBRE</p> 
            <p className='apellidoCotizar'>APELLIDO</p>
            <p className='cargoCotizar'>CARGO/PUESTO</p>
            <p className='empresaCotizar'>EMPRESA</p>
            <p className='mailCotizar'>CORREO ELECTRÓNICO</p>
            <p className='phoneCotizar'>TELÉFONO</p>
            <p className='notasCotizar'>PAÍS/CIUDAD</p>
            <button className='butCotizar'>Enviar</button>

        <MainBar />
        <LeftBar />
        <Footer />
        <video src={vidCotizar} autoPlay muted loop poster={Blurimag} className='vidCotizar'></video>

    </div>
    )

}

export default Cotizar;
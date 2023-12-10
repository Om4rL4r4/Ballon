import '../src/assets/Css/Cotizar.css';
import vid from '../src/assets/Video/Blur-consultoria.mp4';
import imag from '../src/assets/Images/Blur-consultoria-img.png'
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';

function Cotizar(){
    return(
        <>
        <p className='pregunta'>¿TU EMPRESA NECESITA ALGUNO DE NUESTROS SERVICIOS?</p>
        <p className='mainText'>¡Gracias por tu interés! Completa el formulario para que nos pongamos en contacto contigo cuanto antes. 
        Para el resto de consultas envíalas a Contáctanos.<br/>
        Si quieres trabajar con nosotros, envía tu información a través de Careers.
        </p>
        <div className='form'></div>
            <p className='nombre'>NOMBRE</p> 
            <p className='apellido'>APELLIDO</p>
            <p className='cargo'>CARGO/PUESTO</p>
            <p className='empresa'>EMPRESA</p>
            <p className='mail'>CORREO ELECTRÓNICO</p>
            <p className='phone'>TELÉFONO</p>
            <p className='notas'>PAÍS/CIUDAD</p>
            <button>Enviar</button>

        <MainBar />
        <LeftBar />
        <Footer />
        <video src={vid} autoPlay muted loop poster={imag}></video>

    </>
    )

}

export default Cotizar;
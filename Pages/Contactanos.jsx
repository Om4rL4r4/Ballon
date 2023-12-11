
import '../src/assets/Css/Contactanos.css';
import vid from '../src/assets/Video/Blur-consultoria.mp4';
import imag from '../src/assets/Images/Blur-consultoria-img.png'
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';

function Contactanos(){
    return(
        <div className='msjMain'>

        <p className='msj'>DÉJANOS UN MENSAJE<br /> Y NOS PONDREMOS EN CONTACTO CONTIGO.</p>
        <div className='form'></div>
            <p className='tema'>TEMA DE INTERÉS<span>(SUSCRIPCIÓN A NOTICIAS, MEDIOS, CONTACTAR A NUESTROS ESPECIALISTAS...)</span></p>
            <p className='nombre'>NOMBRE</p>
            <p className='apellido'>APELLIDO</p>
            <p className='cargo'>CARGO/PUESTO</p>
            <p className='empresa'>EMPRESA</p>
            <p className='mail'>CORREO ELECTRÓNICO</p>
            <p className='phone'>TELÉFONO</p>
            <p className='notas'>NOTAS</p>
            <button>Enviar</button>

        

        <MainBar />
        <LeftBar />
        <Footer />
        <video src={vid} autoPlay muted loop poster={imag} className='video-fondo'></video>


    </div>
    )

}

export default Contactanos;
import '../src/assets/Css/Auditoria.css';
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';
import video from '../src/assets/Video/Blur-consultoria.mp4'
import imag from '../src/assets/Images/Blur-img.png';
import figura from '../src/assets/Images/reloj.png'

function Auditoria(){
    return(
        <div className='auditoriaMain'>
        <p className='auditoriaTitle'>AUDITORÍA DIGITAL</p>
        <p className='auditoriaText'>
        Navegar por el mundo digital sin un mapa puede ser desafiante. 
        Pero con Balloon Consulting, recibes una lente especializada para examinar tu inversión digital. 
        No solo identificamos dónde podrías tropezar, sino que te equipamos con un plan detallado, centrado en nuestro modelo propietario CPA, asegurando que cada paso que das esté optimizado.<br/><br/><br/>
        En conjunto con profesionales del sector y experiencia probada, te brindamos una variedad de metodologías e inteligencia para explorar si la fomra en la que hoy estás invirtiendo tu presupuesto de digital es el óptimo y no solo eso, te brindaremos todo el conocimiento y plan detallado para perfeccionarlo basado en un modelo propietario basado en CPA (costo por adquisiciòn) Digital (modelos de venta, capacidades tecnológicas y herramientas de crecimiento).<br/><br/> 
        <span>· Certificación en la optimización Paid Media</span>


        </p>
        <img src={figura} className='figura'/>
        <MainBar />
        <LeftBar />
        <Footer />
        <video src={video} autoPlay muted loop poster={imag}></video>

    </div>
    )
}

export default Auditoria;
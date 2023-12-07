import '../src/assets/Css/Auditoria.css';
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';
import video from '../src/assets/Video/Blur-consultoria.mp4'
import imag from '../src/assets/Images/Blur-img.png';
import figura from '../src/assets/Images/Arco.png'

function Modelos(){
    return(
        <>
        <p className='consul'>MODELOS DE<br/>COMERCIALIZACIÓN ONLINE</p>
        <p className='MainText'>
        En el vasto mercado digital, es fácil perderse entre clicks e impresiones. 
        Pero Balloon Consulting te invita a mirar más allá, a imaginar un mundo donde cada inversión digital se transforma en crecimiento real. Juntos, ideamos estrategias probadas para llevarte a la cima del mundo digital. <br/><br/>
        Cuando se habla de un entorno tan competido en el mundo digital, es importante conocer a profundidad el como tu negocio genera ingresos e idear juntos como se puede potencializar. 
        Te invitamos a no pensar en clicks o impresiones sino en evolucionar tus inversiones con modelos probados de adquisición y comercialización en línea que te llevarán a otro nivel.<br/><br/>
        <span>
        · Campañas Operativas Digitales (CPA puro) <br/>
        · Desarrollo de Modelos de atribución y contribución <br/>
        · Programa de AfiliadosTM

        </span>
       

        </p>
        <img src={figura} className='figura'/>
        <MainBar />
        <LeftBar />
        <Footer />
        <video src={video} autoPlay muted loop poster={imag}></video>

    </>

    )
}

export default Modelos;
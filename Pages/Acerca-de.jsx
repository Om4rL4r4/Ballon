import '../src/assets/Css/Acerca.css';
import MainBar from '../Components/MainBar';
import LeftBar from '../Components/LeftBar';
import Footer from '../Components/Footer';
import video from '../src/assets/Video/Blur-consultoria.mp4';
import imag from '../src/assets/Images/Blur-img.png';
import Flor from '../src/assets/Images/Flor-green.png';
import Graph from '../src/assets/Images/graph.png';
import Arco from '../src/assets/Images/Arco.png';
import Medio from '../src/assets/Images/medio-orange.png';




function Acercade(){
    return(
        <>
        <p className='consul'>SOMOS LA FIRMA LÍDER EN SERVICIOS PROFESIONALES PARA EL ECOSISTEMA DIGITAL</p>
        <p className='MainText'>
        Basado en retorno para México y Estados Unidos, ofreciendo un enfoque de 360 grados en las áreas de Auditoría de Medios, Adquisición Digital, Growth, Marketing y Transformación Digital para todo tipo de compañías e industrias y Con Balloon converge la tecnología con la creatividad construyendo modelos adhoc que permitan el crecimiento, expansión y rentabilidad de comercios en el ecosistema digital.<br /><br />
        Balloon hace referencia a la palabra “globo”, donde el volar alto y desde otra perspectiva es que se implementan soluciones innovadoras en los modelos de comercialización digital en cualquier sector.<br /><br />
        Significado: Un “globo” es una bolsa de material ligero, pequeña y delgada en la que se sopla aire para que se haga más grande, más redonda o más larga..que asciende, se expande, viaja o crece rápidamente.<br /><br />
        Los “globos” son en gran medida un símbolo de nuestras metas, sueños y aspiraciones. Los globos toman vuelo de la manera que nos gustaría.<br /><br />
        Los “globos” representan la necesidad de dejarse llevar. Cuando soltamos un globo lleno de aire, se eleva hacia el cielo, ya no está atado a la tierra. Esto es exactamente lo que hacemos con modelos disruptivos de crecimiento y cumplimientos de metas de nuestros clientes y en la construcción y acompañamiento de su futuro digital (transformación digital).<br /><br />
        Desde que somos niños pequeños, les rogamos a nuestros padres que los compren solo para sostenerlos por un tiempo antes de soltarlos o reventarlos. Son coloridos, cuando los vemos nos llaman la atención. Los globos son fascinantes: la mitad en el cielo, la mitad en la tierra. Los globos también representan la libertad. Más específicamente, la libertad que experimentamos al obtener nuestras metas y crecimiento de negocio.
        Permítenos acompañarte en tus procesos de crecimiento digital.




        </p>
        <img src={Flor} className='Flor'/>
        <img src={Graph} className='Graph'/>
        <img src={Arco} className='Arco'/>
        <img src={Medio} className='Medio'/>

        <MainBar />
        <LeftBar />
        <Footer />
        <video src={video} autoPlay muted loop poster={imag} className='video-fondo'></video>

    </>
    )
}

export default Acercade;
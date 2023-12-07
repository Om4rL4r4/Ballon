import '../src/assets/Css/Proyectos.css';
import MainBar from '../Components/MainBar.jsx';
import MainText from '../Components/MainText.jsx';
import video from '../src/assets/Video/pexels.mp4';
import LeftBar from '../Components/LeftBar.jsx';
import React from 'react';
import Gradiente from '../src/assets/Images/pexels-img.png';
import reloj from '../src/assets/Images/reloj.png';
import flor from '../src/assets/Images/Flor.png';
import Arco from '../src/assets/Images/Arco.png';
import Medio from '../src/assets/Images/Medio.png'
import Blur from '../src/assets/Images/Blur-img.png'
import Flor2 from '../src/assets/Images/Flor-green.png'
import Blur2 from '../src/assets/Images/Blur-yellow.png'
import reloj2 from '../src/assets/Images/reloj2.png'
import huevo from '../src/assets/Images/huevo.png'
import BG from '../src/assets/Images/Background.png'





function Proyectos() {
 return(
  <div className='whole'>
    <div className='P1'>
    <MainBar />
    <MainText />
    <LeftBar />
    
    <video src={video} autoPlay muted loop poster={Gradiente}></video>

    </div>
    
    <div className='P2'>
        
        <img src={reloj} className='reloj'/>
        <img src={Blur} className='blur'/>
        <h1 className='mundo'>Mundo Financiero</h1>
        <p className='desafio'>Desafío: Las instituciones financieras enfrentan una creciente competencia y la demanda de una experiencia de usuario digitalizada y segura.<br/><br />
        Solución: Implementamos estrategias de adquisición digital y growth marketing, hemos diseñado campañas de venta hiper-segmentadas para atraer a clientes potenciales con retornos de más de 200% de crecimiento en los primeros meses
         y disminución de costos de adquisición de hasta un 60%. 
         Hemos desarrollado campañas xsell y upsell centradas en la personalización y también hemos desarrollado productos financieros digitales adaptados a las necesidades de los clientes o audiencias. 
         Además, con la ayuda de la IA, es posible desarrollar chatbots para asistencia financiera y plataformas de inversión automatizadas.<br /><br /> 
         Resultados Posibles: Aumento del 25% en la adquisición de nuevos clientes, mejora del 40% en la retención de clientes y una reducción del 30% en costos de servicio al cliente.</p>
    </div>

    <div className='P3'>
        
        
        <h1 className='sector'>Sector Healthcare</h1>
        <p className='desafio2'>Desafío: La industria de la salud busca mejorar la atención al paciente, reducir costos y optimizar la gestión de datos.<br/><br />
        Solución: Mediante la inteligencia artificial, se pueden implementar sistemas de diagnóstico asistido y herramientas de monitorización en tiempo real. Las estrategias de growth marketing pueden mejorar la captación de pacientes y la fidelización.<br /><br /> 
        Resultados Posibles: Aumento en la precisión diagnóstica del 20%, reducción de costos operativos en un 15% y mejora en la satisfacción del paciente en un 35%.
        </p>
        <img src={Arco} className='arco'/>
        <img src={Medio} className='medio'/>
    </div>

    <div className='P4'>
        
        <img src={Flor2} className='flor2'/>
        <img src={Blur2} className='blur2'/>
        <h1 className='influencer'>Influencers Independientes</h1>
        <p className='desafio4'>Desafío: Los influencers buscan maximizar su alcance, engagement y monetizar su contenido de manera efectiva.<br/><br />
        Solución: A través de técnicas de adquisición digital, es posible identificar y captar audiencias segmentadas. Además, con herramientas de analítica avanzada, se pueden optimizar las publicaciones para obtener el máximo engagement. La IA puede utilizarse para analizar tendencias y prever contenidos de éxito. <br /><br /> 
        Resultados Posibles: Incremento del 50% en engagement, aumento del 30% en la monetización y expansión de la audiencia en un 40%.
        </p>
        
    </div>

    <div className='P5'>
        
        
        <h1 className='retail'>Sector Retail</h1>
        <p className='desafio5'>Desafío: Las tiendas y marcas buscan mejorar su presencia online, aumentar ventas y personalizar la experiencia del cliente.<br/><br />
        Solución: Implementando estrategias de growth marketing, es posible diseñar campañas de retargeting y publicidad segmentada. Además, la IA puede utilizarse para sistemas de recomendación de productos y análisis predictivo de tendencias de compra.<br /><br /> 
        Resultados Posibles: Aumento en ventas online del 60%, mejora en la retención de clientes del 45% y aumento en la satisfacción del cliente en un 50%.
        </p>
        <img src={reloj2} className='reloj2'/>
        <img src={huevo} className='huevo'/>
        
    </div>

    <div className='P6'>
        
        
        <p className='txt6'>
        Estos ejemplos, demuestran el poder y potencial de las estrategias digitales avanzadas en diversos sectores. 
        Con una consultoría adecuada, cualquier industria puede adaptarse, innovar y prosperar en el ecosistema digital contemporáneo.
        </p>
        <button>CONTÁCTANOS Y TE AYUDAMOS</button>
        

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
        <img src={BG} className='BG'/>
        
        
    </div>
        
  </div>
  

 )
}

export default Proyectos;
import MainBar from '../Components/MainBar.jsx'
import LeftBarTwo from '../Components/LeftBarTwo.jsx'
import FooterTwo from '../Components/FooterTwo.jsx'
import info from '../src/assets/Images/info.png'
import Adquisicionimg from '../src/assets/Images/Adquisicion-img.png'
import IA from '../src/assets/Images/IA.png'
import Big from '../src/assets/Images/Big.png'
import Machine from '../src/assets/Images/Machine.png'
import '../src/assets/Css/Noticias.css'
import { Link } from 'react-router-dom'


function Noticias(){
    return(
        <>
        <MainBar />
        
        <LeftBarTwo />
        <section className='topics'>

            <Link to='/Transformacion'><div className='info'>
                <img src={info} />
            </div>
            <p className='tx1'>Por qué las organizaciones fallan<br /> en la transformación digital</p></Link>

            <Link to='/Adquisicion'><div className='Adquisicionimg'>
            <img src={Adquisicionimg} />
            </div>
            <p className='tx2'>Adquisición Digital: El CAC y la importancia de una estrategia<br /> online rentable</p></Link>


            <Link to='/IA'><div className='IA'>
            <img src={IA} />
            </div>
            <p className='tx3'>Inteligencia Artificial: Revolucionando las Ventas<br /> Digitales</p></Link>


            <Link to='/Big'><div className='Big'>
            <img src={Big} />
            </div>
            <p className='tx4'>Evolución del Big Data y la<br /> Analítica Avanzada en el<br /> Ecosistema Digital</p></Link>


            <Link to='/Machine'><div className='Machine'>
            <img src={Machine} />
            </div>
            <p className='tx5'>Machine Learning y el Auge de los<br /> Nuevos Conceptos en el<br /> Ecosistema Digital</p></Link>


        </section>

        <FooterTwo />
        

        </>
    )
}

export default Noticias;
import '../src/assets/Css/LeftBarTwo.css';
import { Link } from 'react-router-dom';



function LeftBarTwo(){
    return(
        <nav className='principal'>
            <ul>
                <li><Link to='/Cotizar'>Cotizar</Link></li>
                <li><Link to='/Noticias'>Noticias</Link></li>
                <li><Link to='/Proyectos'>Proyectos</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
            </ul>
            
        </nav>

    )
}

export default LeftBarTwo;
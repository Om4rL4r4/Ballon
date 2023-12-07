import '../src/assets/Css/LeftBarStyle.css';
import { Link } from 'react-router-dom';



function LeftBar(){
    return(
        <nav className='main'>
            <ul>
                <li><Link to='/Cotizar'>Cotizar</Link></li>
                <li><Link to='/Noticias'>Noticias</Link></li>
                <li><Link to='/Proyectos'>Proyectos</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
            </ul>
            
        </nav>

    )
}

export default LeftBar;
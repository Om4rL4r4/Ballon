import '../src/assets/Css/FooterTwo.css'
import { Link } from 'react-router-dom';

function FooterTwo (){
    return(
        <>
        <div className="opciones">
            <ul>
                <li><Link to='/Acerca-de'>Acerca de</Link></li>
                <li><Link to='/Trabaja-con-nosotros'>Trabaja con Nosotros</Link></li>
                <li><Link to='/Contactanos'>Contáctanos</Link></li>
                <li><Link to='/Aviso-de-privacidad'>Aviso de Privacidad</Link></li>
                <li><Link to='/Terminos-y-condiciones'>Términos y Condiciones</Link></li>
                <li><Link to='/Politicas-de-cookies'>Política de Cookies</Link></li>
            </ul>
        </div>
        </>

    )
}

export default FooterTwo;
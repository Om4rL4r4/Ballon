import '../src/assets/Css/OpcionesStyle.css';
import { Link } from 'react-router-dom';

function Opciones(){
    return(
        <div className='service'>
            <p><Link to='/Consultoria'>CONSULTORÍA</Link></p>
            <hr></hr>
            <p><Link to='/Auditoria'>AUDITORÍA DIGITAL</Link></p>
            <hr className='tx'></hr>
            <p className='tx'><Link to='/Modelos'>MODELOS DE<br/>COMERCIALIZACIÓN<br/>ONLINE</Link></p>
            <hr className='tx'></hr>
            <p className='tx'><Link to='/Marketing-digital'>MARKETING DIGITAL</Link></p>
            <hr className='tx'></hr>
            <p className='tx'><Link to='/Reclutamiento'>RECLUTAMIENTO DE<br/>EQUIPOS DE ALTO DESEMPEÑO<br/>PARA DIGITAL</Link></p>
            <hr className='tx'></hr>

            
        </div>
    )
}

export default Opciones;
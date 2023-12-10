import '../src/assets/Css/Trabaja-con-nosotros.css';
import MainBar from '../Components/MainBar';
import FooterTwo from '../Components/FooterTwo.jsx';
import Colors from '../src/assets/Images/colors.png';
import LeftBarTwo from '../Components/LeftBarTwo.jsx'


function Trabajaconnosotros(){
    return(
        <>
        
        <p className='consul'>CREEMOS QUE EL TALENTO<br /> ES CLAVE EN CUALQUIER ORGANIZACIÓN.</p>
        <p className='MainText'>
        Si quieres crecer, desarrollarte y cuentas con una visión centrada en el cliente déjanos tu CV o explora nuestras vacantes y aplica.<br /><br />
        <span>¡Te estamos esperando!</span>
        </p>
        
            <p className='name'>NOMBRE<br /><br /><hr></hr></p>
            <p className='mail'>E-MAIL<br /><br /><hr></hr></p>
            <p className='cv'>AJUNTAR CV</p>
            <div className='rectangle'></div>
        
        
        <img src={Colors} className='Colors'/>
       
        <LeftBarTwo />
        <MainBar />
        <FooterTwo />

    </>
    )
}

export default Trabajaconnosotros;
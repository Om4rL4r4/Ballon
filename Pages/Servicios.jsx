import '../src/assets/Css/ServiciosStyle.css';
import Colorful from '../src/assets/Video/Colorful.mp4';
import Gradient from '../src/assets/Images/Gradient-img.png'
import Footer from '../Components/Footer';
import LeftBar from '../Components/LeftBar';
import MainBar from '../Components/MainBar';
import Opciones from '../Components/Opciones';


function Servicios(){
    return (
        <div className='er'>
            
            <MainBar />
            <LeftBar />
            <Opciones />
            <Footer />

            
            <video src={Colorful} autoPlay muted loop poster={Gradient} className='video-fondo'></video>

        </div>
        
    )
}

export default Servicios;
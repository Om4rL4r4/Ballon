import '../src/assets/Css/BarStyle.css';
import Logo from '../src/assets/Images/Logo.png';
import FB from '../src/assets/Images/Facebook.png';
import IG from '../src/assets/Images/Instagram.png';
import Linkedin from '../src/assets/Images/Linkedin.png';
import { Link } from 'react-router-dom';




const MainBar = ()=>{
    return(
    <div className='Bar'>
        <Link to='/'><img src={Logo} className='logo'/></Link>
        <section className='ima'>
            <img src={FB} className='im'/>
            <img src={IG} className='im'/>
            <img src={Linkedin} className='im'/>
            <p className='idioma'>EN </p>
            <p className='idioma'>| ESP</p>  
        </section>
    </div>
    )
}

export default MainBar;
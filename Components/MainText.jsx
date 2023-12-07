import '../src/assets/Css/MainTextStyle.css';
import Grupo from '../src/assets/Images/Grupo_163.png'


function MainText (){
    return(
        <>  
        <div>
                <img src={Grupo} className='impulsamos'/>
                <p className='t-uno'>LA INDUSTRIA</p>
                <p className='t-dos'>A TRAVÉS DE LA CONSULTORÍA<br/>
                DIGITAL AVANZADA</p>

        </div>
                
            
        </>

    )
}

export default MainText;
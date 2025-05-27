import './Nav.css'
import logo from '../../assets/img/shared/logo.svg'

export default function Nav(){

    return(

        <div className='divNavGlo'>
            <div className='divNavLogo'>
                <img src={logo} alt="" />
            </div>
            <div className='divNavList'>
                <ul>
                    <li className='divNavLi'>00 HOME</li>
                    <li className='divNavLi'>01 DESTINATION</li>
                    <li className='divNavLi'>02 CREW</li>
                    <li className='divNavLi'>03 TECHNOLOGY</li>
                </ul>
            </div>
        </div>
    )
}
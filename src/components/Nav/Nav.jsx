import './Nav.css'
import logo from '../../assets/img/shared/logo.svg'

export default function Nav(){

    return(

        <div>
            <div className='divNavLogo'>
                <img src={logo} alt="" />
            </div>
            <div className='divNavList'>
                <ul>
                    <li>00 HOME</li>
                    <li>01 DESTINATION</li>
                    <li>02 CREW</li>
                    <li>03 TECHNOLOGY</li>
                </ul>
            </div>
        </div>
    )
}
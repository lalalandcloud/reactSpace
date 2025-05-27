import './Nav.css'
import logo from '../../assets/img/shared/logo.svg'
import { Link } from 'react-router-dom'
import Home from '../../pages/Home/Home'


export default function Nav(){

    return(

        <div className='divNavGlo'>
            <div className='divNavLogo'>
                <img src={logo} alt="" />
            </div>
            <div className='divNavList'>
            <ul>
                <Link to="/" ><li className='divNavLi'>00 HOME</li></Link>
                <Link to="/destination" ><li className='divNavLi'>01 DESTINATION</li></Link>
                <Link to="/crew" ><li className='divNavLi'>02 CREW</li></Link>
                <Link to="/technology" ><li className='divNavLi'>03 TECHNOLOGY</li></Link>
                </ul>
            </div>
        </div>
    )
}
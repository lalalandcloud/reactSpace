// import './Nav.css'
// import logo from '../../assets/img/shared/logo.svg'
// import { Link, NavLink } from 'react-router-dom'
// import Home from '../../pages/Home/Home'


// export default function Nav(){

//     return(

//         <div className='divNavGlo'>
//             <div className='divNavLogo'>
//                 <img src={logo} alt="" />
//             </div>
//             <div className='divNavList'>
//                 <ul>
//                     <NavLink to="/" className='divNavLi' aria-current="page"><li>00 HOME</li></NavLink>
//                     <NavLink to="/destination" className='divNavLi' ><li>01 DESTINATION</li></NavLink>
//                     <NavLink to="/crew" className='divNavLi' ><li>02 CREW</li></NavLink>
//                     <NavLink to="/technology" className='divNavLi' ><li>03 TECHNOLOGY</li></NavLink>
//                 </ul>
//             </div>
//         </div>
//     )
// }




import './Nav.css';
import logo from '../../assets/img/shared/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='divNavGlo'>
            <div className='divNavLogo'>
                <img src={logo} alt="" />
            </div>
            <button className="burgerMenu" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`divNavList ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <NavLink to="/" className='divNavLi' aria-current="page"><li>00 HOME</li></NavLink>
                    <NavLink to="/destination" className='divNavLi'><li>01 DESTINATION</li></NavLink>
                    <NavLink to="/crew" className='divNavLi'><li>02 CREW</li></NavLink>
                    <NavLink to="/technology" className='divNavLi'><li>03 TECHNOLOGY</li></NavLink>
                </ul>
            </div>
        </div>
    );
}
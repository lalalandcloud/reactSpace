import { NavLink } from 'react-router-dom'
import './DestNav.css'


export default function DestNav(){

    return(

        <div className='destNavList'>
            <nav>
                <NavLink to="/destination/moon" className='divDestNavLi'>MOON</NavLink>
                <NavLink to="/destination/mars" className='divDestNavLi'>MARS</NavLink>
                <NavLink to="/destination/eu" className='divDestNavLi'>EUROPA</NavLink>
                <NavLink to="/destination/titan" className='divDestNavLi'>TITAN</NavLink>
            </nav>
        </div>
    )
}

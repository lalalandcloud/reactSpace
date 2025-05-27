import './DestMars.css'
import Mars from '../../../assets/img/destination/image-Mars.png'
import { NavLink } from 'react-router-dom'


export default function DestMars(){

    return(

        <div className='destMarsGlo'>
            <div className='divMarsLeft'>
                <div></div>
                <div className='divMarsImg'><img src={Mars} alt="" /></div>
            </div>
            <div></div>
            <div className='divMarsText'>
                <div className='destNavList'>
                    <nav>
                        <NavLink to="/destination/moon" className='divDestNavLi'>MOON</NavLink>
                        <NavLink to="/destination/mars" className='divDestNavLi'>MARS</NavLink>
                        <NavLink to="/destination/eu" className='divDestNavLi'>EUROPA</NavLink>
                        <NavLink to="/destination/titan" className='divDestNavLi'>TITAN</NavLink>
                    </nav>
                </div>
                <h1>Mars</h1>
                <p className='divMarsTextP'> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>  
                <p>EST. TRAVEL TIME</p><h5>3 DAYS</h5>
            </div>
        </div>
    )
}
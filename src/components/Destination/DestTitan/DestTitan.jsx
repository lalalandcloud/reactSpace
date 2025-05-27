import './DestTitan.css'
import Titan from '../../../assets/img/destination/image-Titan.png'
import { NavLink } from 'react-router-dom'


export default function DestTitan(){

    return(

        <div className='destTitanGlo'>
            <div className='divTitanLeft'>
                <div></div>
                <div className='divTitanImg'><img src={Titan} alt="" /></div>
            </div>
            <div></div>
            <div className='divTitanText'>
                <div className='destNavList'>
                    <nav>
                        <NavLink to="/destination/moon" className='divDestNavLi'>MOON</NavLink>
                        <NavLink to="/destination/mars" className='divDestNavLi'>MARS</NavLink>
                        <NavLink to="/destination/eu" className='divDestNavLi'>EUROPA</NavLink>
                        <NavLink to="/destination/titan" className='divDestNavLi'>TITAN</NavLink>
                    </nav>
                </div>
                <h1>Titan</h1>
                <p className='divTitanTextP'> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>  
                <p>EST. TRAVEL TIME</p><h5>3 DAYS</h5>
            </div>
        </div>
    )
}
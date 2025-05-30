import './DestEu.css'
import Eur from '../../../assets/img/destination/image-europa.png'
import { NavLink } from 'react-router-dom'


export default function DestEu(){

    return(

        <div className='destEurGlo'>
            <div className='divEurLeft'>
                <div></div>
                <div className='divEurImg'><img src={Eur} alt="" /></div>
            </div>
            <div></div>
            <div className='divEurText'>
                <div className='destNavList'>
                    <nav>
                        <NavLink to="/destination/moon" className='divDestNavLi'>MOON</NavLink>
                        <NavLink to="/destination/mars" className='divDestNavLi'>MARS</NavLink>
                        <NavLink to="/destination/europa" className='divDestNavLi'>EUROPA</NavLink>
                        <NavLink to="/destination/titan" className='divDestNavLi'>TITAN</NavLink>
                    </nav>
                </div>
                <h1>EUROPA</h1>
                <p className='divEurTextP'> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>  
                <p>EST. TRAVEL TIME</p><h5>3 DAYS</h5>
            </div>
        </div>
    )
}
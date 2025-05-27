import DestNav from '../DestNav/DestNav'
import './DestMoon.css'
import moon from '../../../assets/img/destination/image-moon.png'


export default function DestMoon(){

    return(

        <div className='destMoonGlo'>
            <div className='divMoonLeft'>
                <div></div>
                <div className='divMoonImg'><img src={moon} alt="" /></div>
            </div>
            <div></div>
            <div className='divMoonText'>
                <h1>MOON</h1>
                <p className='divMoonTextP'> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>  
                <p>EST. TRAVEL TIME<br />3 DAYS</p>
            </div>
        </div>
    )
}
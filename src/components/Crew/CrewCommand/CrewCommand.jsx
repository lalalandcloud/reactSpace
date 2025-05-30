import './CrewCommand.css'
import command from '../../../assets/img/crew/image-douglas-hurley.png'
import { NavLink } from 'react-router-dom'

export default function CrewCommand(){

    return(

        <div className='divCrewGloDet'>
            <div className='divCrewText'>
                <h3>COMMANDER</h3>
                <h1>DOUGLAS HURLEY</h1>
                <p> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <div className='divCrewImg'>
                <img src={command} alt="" />
            </div>
            <div className='crewNavList'>
                    <nav>
                        <NavLink to="/crew/commander" className='divCrewNavLi'></NavLink>
                        <NavLink to="/crew/engineer" className='divCrewNavLi'></NavLink>
                        <NavLink to="/crew/pilot" className='divCrewNavLi'></NavLink>
                        <NavLink to="/crew/specialist" className='divCrewNavLi'></NavLink>
                    </nav>
                </div>


        </div>
    )
}
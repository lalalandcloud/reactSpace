import spacecapsule from '../../../assets/img/technology/image-space-capsule-portrait.jpg'
import { NavLink } from 'react-router-dom'



export default function TechCapsule(){

    return(

        <div className='divTechVGlo'>
            <div className='divTechBtn'>
                <nav>
                    <NavLink to="/technology/vehicle" className="btnTech">1</NavLink>
                    <NavLink to="/technology/capsule" className="btnTech">2</NavLink>
                    <NavLink to="/technology/spaceport" className="btnTech">3</NavLink> 
                </nav>
            </div>
            <div className='divTechText'>
                <h5>THE TERMINOLOGY</h5>
                <h1>LAUNCH space-capsule</h1>
                <p>Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div>
            <div className='divTechImg'>
                <img src={spacecapsule} alt="" />
            </div>
        </div>
    )
}
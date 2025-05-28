import './TechVehicle.css'
import vehicle from '../../../assets/img/technology/image-launch-vehicle-portrait.jpg'

export default function TechVehicle(){

    return(

        <div className='divTechVGlo'>
            <div className='divTechBtn'>
                <button className="btnTech">
                1</button>
                <button className="btnTech">
                2</button>
                <button className="btnTech">
                3</button>
                <button className="btnTech">
                4</button>
            </div>
            <div className='divTechText'>
                <h5>THE TERMINOLOGY</h5>
                <h1>LAUNCH VEHICLE</h1>
                <p>Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div>
            <div className='divTechImg'>
                <img src={vehicle} alt="" />
            </div>
        </div>
    )
}
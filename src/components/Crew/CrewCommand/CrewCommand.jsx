import './CrewCommand.css'
import command from '../../../assets/img/crew/image-douglas-hurley.png'


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

        </div>
    )
}
import './Crew.css'
import Nav from "../../components/Nav/Nav";
import { Outlet } from 'react-router-dom';

export default function Crew(){

    return(

        <div className='divCrewGlo'>

            <Nav/>         
            <h2 className='h2'><span>02 </span>MEET YOUR CREW</h2>
            <Outlet/>

        </div>
    )
}
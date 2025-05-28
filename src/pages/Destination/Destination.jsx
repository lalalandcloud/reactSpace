import './Destination.css'
import Nav from "../../components/Nav/Nav"
import { Outlet } from 'react-router-dom'

export default function Destination(){

    return(
        <div className='divDestGlo'>
            <Nav/>
            <h2 className='h2'><span>01 </span>PICK YOUR DESTINATION</h2>            
            <Outlet/>
        </div>
    )
}
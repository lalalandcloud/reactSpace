import './Destination.css'
import Nav from "../../components/Nav/Nav"
import DestMars from '../../components/Destination/DestMars/DestMars'
import DestMoon from '../../components/Destination/DestMoon/DestMoon'
import { Outlet } from 'react-router-dom'

export default function Destination(){

    return(
        <div className='divDestGlo'>
            <Nav/>
            
            <Outlet/>
        </div>
    )
}
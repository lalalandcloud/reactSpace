import './Destination.css'
import Nav from "../../components/Nav/Nav"
import DestMars from '../../components/Destination/DestMars/DestMars'
import DestMoon from '../../components/Destination/DestMoon/DestMoon'
import DestNav from '../../components/Destination/DestNav/DestNav'
import { Outlet } from 'react-router-dom'

export default function Destination(){

    return(
        <div className='divDestGlo'>
            <Nav/>
            <DestNav/>
            
            <Outlet/>
        </div>
    )
}
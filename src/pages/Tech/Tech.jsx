import { NavLink, Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import './Tech.css'



export default function Tech(){

    return(
        <div className="divTechGlo">
            <Nav/>         
            <h2 className='h2'><span>03 </span>SPACE LAUNCH 101</h2>
            <Outlet/>            
        </div>
    )
}
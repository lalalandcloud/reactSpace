import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Crew from './pages/Crew/Crew'
import Destination from './pages/Destination/Destination'
import DestMoon from './components/Destination/DestMoon/DestMoon'
import DestMars from './components/Destination/DestMars/DestMars'
import DestEu from './components/Destination/DestEu/DestEu'
import DestTitan from './components/Destination/DestTitan/DestTitan'
import CrewCommand from './components/Crew/CrewCommand/CrewCommand'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/destination' element={<Destination/>}>    
          <Route index element={<DestMoon />} />    
          <Route path='moon' element={<DestMoon/>} />
          <Route path='mars' element={<DestMars/>} />
          <Route path='europa' element={<DestEu/>} />
          <Route path='titan' element={<DestTitan/>} />
        </Route>        
        <Route path='/crew' element={<Crew/>}>
          <Route index element={<CrewCommand/>}/>
          <Route path='commander' element={<CrewCommand/>}/>
        </Route>
      </Routes>

    </>
  )
}

export default App

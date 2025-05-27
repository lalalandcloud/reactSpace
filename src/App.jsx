import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Crew from './pages/Crew/Crew'
import Destination from './pages/Destination/Destination'
import DestMoon from './components/Destination/DestMoon/DestMoon'
import DestMars from './components/Destination/DestMars/DestMars'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crew' element={<Crew/>}/>
        <Route path='/destination' element={<Destination/>}>    
          <Route index element={<DestMoon />} />    
          <Route path='moon' element={<DestMoon/>} />
          <Route path='mars' element={<DestMars/>} />
        </Route>
      </Routes>

    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Crew from './pages/Crew/Crew'




function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/crew' element={<Crew/>}/>
        
      </Routes>

    </>
  )
}

export default App

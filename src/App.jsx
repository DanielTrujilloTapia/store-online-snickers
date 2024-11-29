import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sneakers from './components/Sneakers'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Sneakers/hombres' element={<Sneakers/>}/>
      </Routes>
    </>
  )
}

export default App

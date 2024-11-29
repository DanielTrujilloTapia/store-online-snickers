import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Sneakers from './components/Sneakers'
import Carrito from './components/Carrito'
import Account from './components/Account'
import VistaTennis from './components/VistaTennis'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Sneakers/hombres' element={<Sneakers/>}/>
        <Route path='/Carrito/hombres' element={<Sneakers/>}/>
        <Route path='/Carrito' element={<Carrito/>}/>
        <Route path='/Cuenta' element={<Account/>}/>
        <Route path='/VistaTennis' element={<VistaTennis/>}/>

      </Routes>
    </>
  )
}

export default App

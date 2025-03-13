import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes,Route } from 'react-router-dom'
import Player from './pages/Player/Player'

function App() {

  return (
            <div>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Player/:id' element={<Player/>}/>
              </Routes>
            </div>
  )
}

export default App

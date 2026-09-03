import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './componets/MovieCard'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/favorites'; 
import NavBar from './componets/NavBar';



function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </main>
    </div>
  ); 
}

 
export default App

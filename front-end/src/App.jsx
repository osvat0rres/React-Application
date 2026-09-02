import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './componets/MovieCard'

function App() {
  const movienUmber1 = 1;

  return (
    //fragment 
    <>
  
      <MovieCard movie={{title: "Osvaldo Movie", release_date: "2024"}}/>

      <MovieCard movie={{title: "Aron", release_date: "2020"}}/>
    
    </>
  ) 
}


export default App

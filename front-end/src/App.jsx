import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './componets/MovieCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    //fragment 
    <>
      <MovieCard movie={{title: "Osvaldo Moviw", release_date: "2024"}}/>
    </>
  )
}


export default App

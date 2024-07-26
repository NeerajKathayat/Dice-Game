import { useState } from 'react'
import './App.css'
import Home from './assets/Home'
import Game from './assets/Game'
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const handleGame = ()=>{
     setIsGameStarted(!isGameStarted)
  }

  return (
    <>
      {isGameStarted ? <Game/> : <Home handleGame={handleGame} />}
    </>
  )
}

export default App

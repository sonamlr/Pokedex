import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokedex />
    </>
  )
}

export default App

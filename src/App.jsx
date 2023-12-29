import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import PokemonList from './components/PokemonList/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokedex />
      <PokemonList />
    </>
  )
}

export default App

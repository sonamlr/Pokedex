import { useEffect, useState } from "react";
import axios from 'axios';
import './PokemonList.css'
function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function downloadPokemons() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemonResults = response.data.results;
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        console.log(pokemonResultPromise);
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(pokemonData);
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                name: pokemon.name,
                 image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprite.front_default,
                 types: pokemon.types
                }
        })
        console.log(res);
        setPokemonList(res);
        setIsLoading(false)
    }
    useEffect(() => {
        downloadPokemons();
    }, []);

    return(
            <div className="pokemon-list-wrapper">
                Pokemon List
                {(isLoading) ? 'Loading...':"Data downloaded"}
            </div>
        
    )
}
export default PokemonList;
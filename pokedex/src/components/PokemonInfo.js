import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styling/pokemoninfo.css";


export default function PokemonInfo(props) {
    const [pokename, setPokename] = useState('');
    const [pokemons, setPokemons] = useState([]);

    useEffect((props)=>{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokename}`;
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setPokemons(res.data)
                props.onSubmit(res.data)
                setPokename("")
            })
            .catch(err=>{
                console.log(err)
            })
    }, [pokename])



    return(
        <div className="pokemonInfo">
            <input value={pokename.name}
                   onChange={event => setPokename(event.target.value)}
                   placeholder="pokemon name"
            />
            {/*<div className="drop-down">
                <select>
                    {
                        pokemons.map(pokemon => <option value={pokemon.id}>{pokemon.name}</option>)
                    }
                </select>
            </div>*/}

            <h1>{pokemons.name}</h1>
            <table>
                <th>
                    <tr><h2>Pokedex ID: </h2></tr>
                    <tr><h2>Pokemon Height: </h2></tr>
                    <tr><h2>Pokemon Stats: </h2></tr>
                </th>
                <th>
                    <tr><h2>{pokemons.id}</h2></tr>
                    <tr><h2>{pokemons.height}</h2></tr>
                    {/*<tr><h2>{pokemons.map(pokemon => pokemon.stats)}</h2></tr>*/}
                </th>
            </table>
        </div>
    )
}
import React, {useState} from "react";
import axios from "axios";
import "../styling/pokemoninfo.css";


export default function PokemonInfo(props) {
    const [pokename, setPokename] = useState('');
    const [pokemons, setPokemons] = useState([]);

    let url = `https://pokeapi.co/api/v2/pokemon/${pokename}`;
    axios.get(url)
        .then(res => {
            console.log(res.data.name);
            setPokemons([])
            props.onSubmit(res.data)
            setPokename("")
        })
        .catch(err=>{
            console.log(err)
    })

    return(
        <div className="pokemonInfo">
            <input value={pokename.name}
                   onChange={event => setPokename(event.target.value)}
                   placeholder="pokemon name"
            />
            <h1>{pokemons.name}</h1>
        </div>
    )
}
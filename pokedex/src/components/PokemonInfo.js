import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styling/pokemoninfo.css";
import "../styling/tableinfo.css";


export default function PokemonInfo(props) {
    const [pokename, setPokename] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [pokeId, setPokeId] = useState(0);

    useEffect(()=>{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokename}`;
        axios.get(url)
            .then(res => {
                console.log(res.data.sprites);
                setPokemons(res.data)
                props.onSubmit(res.data)
                setPokename("")
            })
            .catch(err=>{
                console.log(err)
            })
    }, [pokename])

    useEffect((props)=>{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        axios.get(url)
            .then(resp => {
                console.log(resp.data.sprites);
                setPokemons(resp.data);
                props.onSubmit(resp.data);
                setPokeId(0);
            })
            .catch(err=>{
                console.log(err)
            })
    }, [pokeId])

    const pokemonImage = ({pokemons}) => {
        if (pokemons.data.sprites == undefined){
            return(
                <div>
                    loading...
                </div>
            )
        }
    }





    return<div className="pokemonInfo">
        <input value={pokename.name}
               onChange={event => setPokename(event.target.value)}
               placeholder="pokemon name or ID"
        />
        <div>
            <img src={pokemons.data.sprites["front_default"]} alt="pokemon"/>
        </div>
        {/*<div className="drop-down">
            <select>
                {
                    pokemons.map(pokemon => (<option value={pokemon.id}>{pokemon.name}</option>))
                }
            </select>
        </div>*/}
        <div>
            <h1>{pokemons.name}</h1>
            <table className="tableInfo">
                <tr className="pokeInfoHeaders">
                    <th><h3>ID</h3></th>
                    <th><h3>Height</h3></th>
                    <th><h3>Base EXP</h3></th>
                </tr>
                <tbody>
                <tr>
                    <th><h4>{pokemons.id}</h4></th>
                    <th><h4>{pokemons.height}</h4></th>
                    <th><h4>{pokemons.base_experience}</h4></th>
                </tr>
                </tbody>

            </table>
        </div>





                {/*<tr><h2>{pokemons.map(pokemon => pokemon.stats)}</h2></tr>*/}
    </div>
}
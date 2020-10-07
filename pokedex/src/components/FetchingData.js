import React, {useEffect, useState} from "react";
import axios from 'axios';


export default function FetchingData(props) {
    // hooks
    const [pokemons, setPokemons] = useState([pokename]);
    const [pokename, setPokename] = useState('');

    useEffect(()=>{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokename}`;
        axios.get(url)
            .then(res => {
                //console.log(res.data.name)
                setPokemons(res.data)
                props.onSubmit(res.data);
                setPokename('');
            })

            .catch(err=>{
                console.log(err)
            })
    })
    /*useEffect(()=>{
        let urlID = `https://pokeapi.co/api/v2/pokemon/${pokeID}`
        axios.get(urlID)
            .then(resp =>{
                //console.log(resp.data)
                //props.onSubmit(resp.data)
                setPokeID('');
            })
            .catch(err => console.log(err))
    })*/

    return(
        <div>
            <ul>
                <input value={pokename}
                    onChange={event => setPokename(event.target.value)}
                    placeholder="pokemon name"
                />
                {/*<div className="drop-down">
                    <select>
                        {
                            pokemons.map((pokemon => <option value={pokemon.name}>{pokemon.name}</option> ))
                        }
                    </select>
                </div>*/}
                <h1>{pokemons.name}</h1>
                {/*{pokemons.map((pokemon => <li key={pokemon.data.results.id}>{pokemon.data.results.name}</li>))}*/}
                {/*{pokemons.forEach(pokemon => <li key={pokemon.data.results.id}>{pokemon.data.results.name}</li> )}*/}
            </ul>
        </div>
    )




}
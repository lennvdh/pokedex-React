import React, {useEffect, useState} from "react";
import axios from 'axios';
import "../styling/pokemonSearchId.css";

export default function PokemonSearchId(){
    const [pokemons, setPokemons] = useState('');
    const [pokeId, setPokeId] = useState(0);


    /*try{
        useEffect(async (props) => {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
            const res = await axios.get(url)
            console.log(res.data)
        }, [pokeId])
    }catch (err) {
        console.log(err)
    }*/


    useEffect((props)=>{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        axios.get(url)
            .then(resp => {
                console.log(resp.data);
                setPokemons(resp.data);
                props.onSubmit(resp.data);
                setPokeId(0);
            })
            .catch(err=>{
                console.log(err)
            })
    }, [pokeId])

    return(
        <div className="pokemonSearchId">
            <input value={pokeId.id}
                   onChange={event => setPokeId(event.target.value)}
                   placeholder="pokemon id"
            />
        </div>
    )
}
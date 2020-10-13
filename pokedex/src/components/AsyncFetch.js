import React, {useEffect, useState} from "react";
import axios from "axios";

export default function AsyncFetch() {
    const [pokemons, setPokemons] = useState("");



    const getPokemon = async (propt) =>{
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
            const res = await axios.get(url);
            console.log(res.data)
            setPokemons(res.data)
            //propt.onSubmit(res.data)
        }
        catch(err)
            {
            console.log(err)
            }

    }
    useEffect(()=>{
        getPokemon()
    })



    return(
        <div>
            <h1>{pokemons.name}</h1>
        </div>
    )
}
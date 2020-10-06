import React from "react";
import pokemon4 from "../assets/pokemons4.jpg";
import pokemon1 from "../assets/pokemons2.jpg";
import "../styling/background.css";


export default function Background() {

    return(
        <div className="background">
            <img className="pokemonbg2" src={pokemon4} alt="pokemon"/>
            <img className="pokemonbg1" src={pokemon1} alt="pokemon"/>
        </div>
    )
}